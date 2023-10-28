#!/usr/bin/env node

/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var readFile = require( '@stdlib/fs-read-file' ).sync;
var writeFile = require( '@stdlib/fs-write-file' ).sync;
var resolveParentPath = require( '@stdlib/fs-resolve-parent-path' ).sync;
var replace = require( '@stdlib/string-replace' );
var dirname = require( '@stdlib/utils-dirname' );
var currentYear = require( '@stdlib/time-current-year' );
var scaffold = require( './../lib' );
var DATA = require( './data.json' );


// VARIABLES //

var OPTS = {
	'encoding': 'utf8'
};

var ROOT_DIR = dirname( resolveParentPath( 'package.json', {
	'dir': __dirname
}));

var DATA_DIR = resolve( __dirname, '..', 'data' );
var NS_TEMPLATE = readFile( resolve( DATA_DIR, 'namespace__js.txt' ), OPTS );

var DEST_DIR = resolve( ROOT_DIR, 'src', 'namespace', 'dd_d' );

var CURRENT_YEAR = currentYear().toString();
var COPYRIGHT = 'The Stdlib Authors';


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var file;
	var ns;
	var d;
	var i;

	// Generate the API files...
	ns = [];
	for ( i = 0; i < DATA.length; i++ ) {
		d = DATA[ i ];
		scaffold( d );
		ns.push( 'ns.' + d.alias + ' = require( \'@stdlib/' + replace( d.pkg, '/', '-' ) + '\' );'  ); // FIXME: no need to use replace once we install `@stdlib/stdlib` instead of standalone pkgs
	}
	// Generate the namespace...
	file = replace( NS_TEMPLATE, '{{NAMESPACE}}', ns.join( '\n' ) );
	file = replace( file, '{{YEAR}}', CURRENT_YEAR );
	file = replace( file, '{{COPYRIGHT}}', COPYRIGHT );
	writeFile( resolve( DEST_DIR, 'index.js' ), file, OPTS );
}

main();

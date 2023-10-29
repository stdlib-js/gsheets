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
var constantcase = require( '@stdlib/string-constantcase' );
var snakecase = require( '@stdlib/string-snakecase' );
var uncapitalize = require( '@stdlib/string-uncapitalize' );
var currentYear = require( '@stdlib/time-current-year' );
var isInteger = require( '@stdlib/assert-is-integer' ).isPrimitive;


// VARIABLES //

var OPTS = {
	'encoding': 'utf8'
};

var ROOT_DIR = dirname( resolveParentPath( 'package.json', {
	'dir': __dirname
}));

var DATA_DIR = resolve( __dirname, '..', 'data' );
var TEMPLATE = readFile( resolve( DATA_DIR, 'alias__js.txt' ), OPTS );
var TEST_TEMPLATE = readFile( resolve( DATA_DIR, 'test.alias__js.txt' ), OPTS );

var DEST_DIR = resolve( ROOT_DIR, 'src', 'api', 'math', 'generated' );
var TEST_DIR = resolve( ROOT_DIR, 'test', 'api', 'math', 'generated' );

var CURRENT_YEAR = currentYear().toString();
var COPYRIGHT = 'The Stdlib Authors';


// FUNCTIONS //

/**
* Converts a number to a string.
*
* @private
* @param {number} x - input value
* @returns {string} serialized value
*/
function num2str( x ) {
	var v = String( x );
	if ( isInteger( x ) ) {
		v += '.0';
	}
	return v;
}


// MAIN //

/**
* Scaffolds an API.
*
* @param {Object} opts - options
* @param {string} opts.alias - alias
* @param {string} opts.desc - description
* @param {string} opts.pkg - reference package
* @param {Array} opts.values - test values
* @param {string} opts.prng - PRNG name
*/
function scaffold( opts ) {
	var fname;
	var file;

	file = replace( TEMPLATE, '{{ALIAS}}', opts.alias );
	file = replace( file, '{{ALIAS_CONSTANTCASE}}', constantcase( opts.alias ) );
	file = replace( file, '{{DESC}}', opts.desc );
	file = replace( file, '{{X_VALUES_LEN_1}}', num2str( opts.values[ 0 ][ 0 ] ) );
	file = replace( file, '{{Y_VALUES_LEN_1}}', num2str( opts.values[ 1 ][ 0 ] ) );
	file = replace( file, '{{YEAR}}', CURRENT_YEAR );
	file = replace( file, '{{COPYRIGHT}}', COPYRIGHT );

	fname = resolve( DEST_DIR, snakecase( opts.alias )+'.js' );
	writeFile( fname, file, OPTS );

	file = replace( TEST_TEMPLATE, '{{ALIAS}}', opts.alias );
	file = replace( file, '{{REF_PKG}}', replace( opts.pkg, '/', '-' ) ); // FIXME: no need to replace once we install `@stdlib/stdlib` instead of standalone pkgs
	file = replace( file, '{{DESC}}', replace( uncapitalize( opts.desc ), '\'', '\\\'' ) );
	file = replace( file, '{{PRNG}}', opts.prng[ 0 ] ); // FIXME: need to be able to handle different PRNGs for the different arguments
	file = replace( file, '{{X_RAND_MIN}}', ( opts.prng[ 0 ] === 'discrete-uniform' ) ? String( opts.min[ 0 ] ) : num2str( opts.min[ 0 ] ) );
	file = replace( file, '{{X_RAND_MAX}}', ( opts.prng[ 0 ] === 'discrete-uniform' ) ? String( opts.max[ 0 ] ) : num2str( opts.max[ 0 ] ) );
	file = replace( file, '{{Y_RAND_MIN}}', ( opts.prng[ 1 ] === 'discrete-uniform' ) ? String( opts.min[ 1 ] ) : num2str( opts.min[ 1 ] ) );
	file = replace( file, '{{Y_RAND_MAX}}', ( opts.prng[ 1 ] === 'discrete-uniform' ) ? String( opts.max[ 1 ] ) : num2str( opts.max[ 1 ] ) );
	file = replace( file, '{{YEAR}}', CURRENT_YEAR );
	file = replace( file, '{{COPYRIGHT}}', COPYRIGHT );

	fname = resolve( TEST_DIR, 'test.'+snakecase( opts.alias )+'.js' );
	writeFile( fname, file, OPTS );
}


// EXPORTS //

module.exports = scaffold;

/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

/* eslint-disable node/no-unpublished-require */

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var basename = require( 'path' ).basename;
var mkdirp = require( 'mkdirp' ).sync;
var readFile = require( '@stdlib/fs-read-file' ).sync;
var writeFile = require( '@stdlib/fs-write-file' ).sync;
var resolveParentPath = require( '@stdlib/fs-resolve-parent-path' ).sync;
var replace = require( '@stdlib/string-replace' );
var dirname = require( '@stdlib/utils-dirname' );
var constantcase = require( '@stdlib/string-constantcase' );
var kebabcase = require( '@stdlib/string-kebabcase' );
var uncapitalize = require( '@stdlib/string-uncapitalize' );
var currentYear = require( '@stdlib/time-current-year' );


// VARIABLES //

var OPTS = {
	'encoding': 'utf8'
};

var ROOT_DIR = dirname( resolveParentPath( 'package.json', {
	'dir': __dirname
}));

var DATA_DIR = resolve( __dirname, '..', 'data' );
var TEMPLATES = {
	'benchmark': readFile( resolve( DATA_DIR, 'benchmark__js.txt' ), OPTS ),
	'examples': readFile( resolve( DATA_DIR, 'examples__js.txt' ), OPTS ),
	'lib_index': readFile( resolve( DATA_DIR, 'index__js.txt' ), OPTS ),
	'lib_main': readFile( resolve( DATA_DIR, 'main__js.txt' ), OPTS ),
	'test': readFile( resolve( DATA_DIR, 'test__js.txt' ), OPTS ),
	'makefile': readFile( resolve( DATA_DIR, 'Makefile.txt' ), OPTS ),
	'package_json': readFile( resolve( DATA_DIR, 'package__json.txt' ), OPTS ),
	'readme': readFile( resolve( DATA_DIR, 'readme__md.txt' ), OPTS )
};

var DEST_DIR = resolve( ROOT_DIR, 'src', 'node_modules', '@stdlib', 'gsheets', 'api', 'string' );

var CURRENT_YEAR = currentYear().toString();
var COPYRIGHT = 'The Stdlib Authors';


// FUNCTIONS //

/**
* Renders individual values.
*
* @private
* @param {string} tmpl - template string
* @param {string} prefix - template prefix
* @param {string} dtype - value dtype
* @param {Array} values - values
* @returns {string} rendered template
*/
function renderValues( tmpl, prefix, dtype, values ) {
	var v;
	var i;
	for ( i = 0; i < values.length; i++ ) {
		v = values[ i ];
		if ( dtype === 'string' && ( v[ 0 ] !== '\'' && v[ 0 ] !== '"' ) ) {
			// Default to single quotes:
			v = '\'' + v + '\'';
		}
		tmpl = replace( tmpl, '{{'+prefix+'_'+(i+1)+'}}', String( v ) );
	}
	return tmpl;
}

/**
* Renders a benchmark template.
*
* @private
* @param {Object} opts - options
* @param {string} opts.alias - alias
* @param {string} opts.desc - API description
* @param {string} opts.pkg - reference package
* @param {string} opts.pkg_desc - package description
* @param {string} opts.pkg_name - reference package name
* @param {Array} opts.dtypes - signature dtypes
* @param {Array} opts.values - test values
* @param {Array} opts.expected - expected test value results
* @param {string} opts.min - minimum value
* @param {string} opts.max - maximum value
* @param {string} opts.prng - PRNG name
* @returns {string} rendered template
*/
function renderBenchmark( opts ) {
	var file = replace( TEMPLATES.benchmark, '{{ALIAS}}', opts.alias );
	file = replace( file, '{{YEAR}}', CURRENT_YEAR );
	file = replace( file, '{{COPYRIGHT}}', COPYRIGHT );
	file = replace( file, '{{VALUES_LEN_6}}', opts.values.slice( 0, 6 ).join( ',\n\t\t' ) );
	return file;
}

/**
* Renders an examples template.
*
* @private
* @param {Object} opts - options
* @param {string} opts.alias - alias
* @param {string} opts.desc - API description
* @param {string} opts.pkg - reference package
* @param {string} opts.pkg_desc - package description
* @param {string} opts.pkg_name - reference package name
* @param {Array} opts.dtypes - signature dtypes
* @param {Array} opts.values - test values
* @param {Array} opts.expected - expected test value results
* @param {string} opts.min - minimum value
* @param {string} opts.max - maximum value
* @param {string} opts.prng - PRNG name
* @returns {string} rendered template
*/
function renderExamples( opts ) {
	var file = replace( TEMPLATES.examples, '{{ALIAS}}', opts.alias );
	file = replace( file, '{{YEAR}}', CURRENT_YEAR );
	file = replace( file, '{{COPYRIGHT}}', COPYRIGHT );
	file = renderValues( file, 'VALUES', opts.dtypes[ 0 ], opts.values );
	file = renderValues( file, 'EXPECTED', opts.dtypes[ 1 ], opts.expected );
	return file;
}

/**
* Renders a `lib/index.js` template.
*
* @private
* @param {Object} opts - options
* @param {string} opts.alias - alias
* @param {string} opts.desc - API description
* @param {string} opts.pkg - reference package
* @param {string} opts.pkg_desc - package description
* @param {string} opts.pkg_name - reference package name
* @param {Array} opts.dtypes - signature dtypes
* @param {Array} opts.values - test values
* @param {Array} opts.expected - expected test value results
* @param {string} opts.min - minimum value
* @param {string} opts.max - maximum value
* @param {string} opts.prng - PRNG name
* @returns {string} rendered template
*/
function renderLibIndex( opts ) {
	var file = replace( TEMPLATES.lib_index, '{{ALIAS}}', opts.alias );
	file = replace( file, '{{PKG_NAME}}', opts.pkg_name );
	file = replace( file, '{{PKG_DESC}}', opts.pkg_desc );
	file = replace( file, '{{YEAR}}', CURRENT_YEAR );
	file = replace( file, '{{COPYRIGHT}}', COPYRIGHT );
	file = renderValues( file, 'VALUES', opts.dtypes[ 0 ], opts.values );
	file = renderValues( file, 'EXPECTED', opts.dtypes[ 1 ], opts.expected );
	return file;
}

/**
* Renders a `lib/main.js` template.
*
* @private
* @param {Object} opts - options
* @param {string} opts.alias - alias
* @param {string} opts.desc - API description
* @param {string} opts.pkg - reference package
* @param {string} opts.pkg_desc - package description
* @param {string} opts.pkg_name - reference package name
* @param {Array} opts.dtypes - signature dtypes
* @param {Array} opts.values - test values
* @param {Array} opts.expected - expected test value results
* @param {string} opts.min - minimum value
* @param {string} opts.max - maximum value
* @param {string} opts.prng - PRNG name
* @returns {string} rendered template
*/
function renderLibMain( opts ) {
	var values;
	var file;
	var v;
	var i;

	values = opts.values.slice();
	for ( i = 0; i < values.length; i++ ) {
		v = values[ i ];
		v = replace( v, /^'/, '"' );
		v = replace( v, /'$/, '"' );
		values[ i ] = v;
	}

	file = replace( TEMPLATES.lib_main, '{{ALIAS}}', opts.alias );
	file = replace( file, '{{YEAR}}', CURRENT_YEAR );
	file = replace( file, '{{COPYRIGHT}}', COPYRIGHT );
	file = replace( file, '{{DESC}}', opts.desc );
	file = replace( file, '{{ALIAS_CONSTANTCASE}}', constantcase( opts.alias ) );
	file = renderValues( file, 'VALUES', opts.dtypes[ 0 ], values );
	file = renderValues( file, 'EXPECTED', opts.dtypes[ 1 ], opts.expected );
	return file;
}

/**
* Renders a Makefile template.
*
* @private
* @param {Object} opts - options
* @param {string} opts.alias - alias
* @param {string} opts.desc - API description
* @param {string} opts.pkg - reference package
* @param {string} opts.pkg_desc - package description
* @param {string} opts.pkg_name - reference package name
* @param {Array} opts.dtypes - signature dtypes
* @param {Array} opts.values - test values
* @param {Array} opts.expected - expected test value results
* @param {string} opts.min - minimum value
* @param {string} opts.max - maximum value
* @param {string} opts.prng - PRNG name
* @returns {string} rendered template
*/
function renderMakefile() {
	var file = replace( TEMPLATES.makefile, '{{YEAR}}', CURRENT_YEAR );
	file = replace( file, '{{COPYRIGHT}}', COPYRIGHT );
	return file;
}

/**
* Renders a `package.json` template.
*
* @private
* @param {Object} opts - options
* @param {string} opts.alias - alias
* @param {string} opts.desc - API description
* @param {string} opts.pkg - reference package
* @param {string} opts.pkg_desc - package description
* @param {string} opts.pkg_name - reference package name
* @param {Array} opts.dtypes - signature dtypes
* @param {Array} opts.values - test values
* @param {Array} opts.expected - expected test value results
* @param {string} opts.min - minimum value
* @param {string} opts.max - maximum value
* @param {string} opts.prng - PRNG name
* @returns {string} rendered template
*/
function renderPackageJSON( opts ) {
	var file = replace( TEMPLATES.package_json, '{{PKG_NAME}}', opts.pkg_name );
	file = replace( file, '{{PKG_DESC}}', opts.pkg_desc );
	return file;
}

/**
* Renders a test template.
*
* @private
* @param {Object} opts - options
* @param {string} opts.alias - alias
* @param {string} opts.desc - API description
* @param {string} opts.pkg - reference package
* @param {string} opts.pkg_desc - package description
* @param {string} opts.pkg_name - reference package name
* @param {Array} opts.dtypes - signature dtypes
* @param {Array} opts.values - test values
* @param {Array} opts.expected - expected test value results
* @param {string} opts.min - minimum value
* @param {string} opts.max - maximum value
* @param {string} opts.prng - PRNG name
* @returns {string} rendered template
*/
function renderTest( opts ) {
	var file = replace( TEMPLATES.test, '{{ALIAS}}', opts.alias );
	file = replace( file, '{{YEAR}}', CURRENT_YEAR );
	file = replace( file, '{{COPYRIGHT}}', COPYRIGHT );
	file = replace( file, '{{REF_PKG}}', replace( opts.pkg, '/', '-' ) ); // FIXME: no need to replace once we install `@stdlib/stdlib` instead of standalone pkgs
	file = replace( file, '{{DESC}}', replace( uncapitalize( opts.desc ), '\'', '\\\'' ) );
	file = replace( file, '{{VALUES_LEN_4}}', opts.values.slice( 0, 4 ).join( ', ' ) );
	return file;
}

/**
* Renders a README template.
*
* @private
* @param {Object} opts - options
* @param {string} opts.alias - alias
* @param {string} opts.desc - API description
* @param {string} opts.pkg - reference package
* @param {string} opts.pkg_desc - package description
* @param {string} opts.pkg_name - reference package name
* @param {Array} opts.dtypes - signature dtypes
* @param {Array} opts.values - test values
* @param {Array} opts.expected - expected test value results
* @param {string} opts.min - minimum value
* @param {string} opts.max - maximum value
* @param {string} opts.prng - PRNG name
* @returns {string} rendered template
*/
function renderREADME( opts ) {
	var file = replace( TEMPLATES.readme, '{{ALIAS}}', opts.alias );
	file = replace( file, '{{PKG_NAME}}', opts.pkg_name );
	file = replace( file, '{{PKG_DESC}}', opts.pkg_desc );
	file = replace( file, '{{YEAR}}', CURRENT_YEAR );
	file = replace( file, '{{COPYRIGHT}}', COPYRIGHT );
	file = replace( file, '{{DESC}}', opts.desc );
	file = renderValues( file, 'VALUES', opts.dtypes[ 0 ], opts.values );
	file = renderValues( file, 'EXPECTED', opts.dtypes[ 1 ], opts.expected );
	return file;
}


// MAIN //

/**
* Scaffolds an API.
*
* @param {Object} options - options
* @param {string} options.alias - alias
* @param {string} options.pkg - reference package
* @param {string} options.pkg_desc - package description
* @param {string} options.desc - API description
* @param {Array} options.dtypes - signature dtypes
* @param {Array} options.values - test values
*/
function scaffold( options ) {
	var fname;
	var opts;
	var file;
	var dir;
	var ref;
	var v;
	var i;

	opts = {
		'alias': options.alias,
		'pkg': options.pkg,
		'pkg_name': basename( options.pkg ),
		'pkg_desc': options.pkg_desc,
		'desc': options.desc,
		'dtypes': options.dtypes.slice(),
		'values': options.values.slice(),
		'expected': []
	};
	ref = require( '@stdlib/' + kebabcase( opts.pkg ) ); // eslint-disable-line stdlib/no-dynamic-require
	for ( i = 0; i < opts.values.length; i++ ) {
		opts.expected.push( ref( opts.values[ i ] ) );
	}
	for ( i = 0; i < opts.values.length; i++) {
		v = options.values[ i ];
		if ( options.dtypes[ 0 ] === 'string' ) {
			v = '\'' + v + '\'';
		}
		opts.values[ i ] = v;
	}

	file = renderBenchmark( opts );
	dir = resolve( DEST_DIR, opts.pkg_name, 'benchmark' );
	fname = resolve( dir, 'benchmark.js' );
	mkdirp( dir );
	writeFile( fname, file, OPTS );

	file = renderExamples( opts );
	dir = resolve( DEST_DIR, opts.pkg_name, 'examples' );
	fname = resolve( dir, 'index.js' );
	mkdirp( dir );
	writeFile( fname, file, OPTS );

	file = renderLibIndex( opts );
	dir = resolve( DEST_DIR, opts.pkg_name, 'lib' );
	fname = resolve( dir, 'index.js' );
	mkdirp( dir );
	writeFile( fname, file, OPTS );

	file = renderLibMain( opts );
	dir = resolve( DEST_DIR, opts.pkg_name, 'lib' );
	fname = resolve( dir, 'main.js' );
	mkdirp( dir );
	writeFile( fname, file, OPTS );

	file = renderMakefile( opts );
	dir = resolve( DEST_DIR, opts.pkg_name );
	fname = resolve( dir, 'Makefile' );
	mkdirp( dir );
	writeFile( fname, file, OPTS );

	file = renderPackageJSON( opts );
	dir = resolve( DEST_DIR, opts.pkg_name );
	fname = resolve( dir, 'package.json' );
	mkdirp( dir );
	writeFile( fname, file, OPTS );

	file = renderREADME( opts );
	dir = resolve( DEST_DIR, opts.pkg_name );
	fname = resolve( dir, 'README.md' );
	mkdirp( dir );
	writeFile( fname, file, OPTS );

	file = renderTest( opts );
	dir = resolve( DEST_DIR, opts.pkg_name, 'test' );
	fname = resolve( dir, 'test.js' );
	mkdirp( dir );
	writeFile( fname, file, OPTS );
}


// EXPORTS //

module.exports = scaffold;

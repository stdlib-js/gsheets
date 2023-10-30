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
var isInteger = require( '@stdlib/assert-is-integer' ).isPrimitive;


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

var DEST_DIR = resolve( ROOT_DIR, 'src', 'node_modules', '@stdlib', 'gsheets', 'api', 'math' );

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

/**
* Renders a benchmark template.
*
* @private
* @param {Object} opts - options
* @param {string} opts.alias - alias
* @param {string} opts.desc - description
* @param {string} opts.pkg - reference package
* @param {Array} opts.values - test values
* @param {string} opts.min - minimum value
* @param {string} opts.max - maximum value
* @param {string} opts.prng - PRNG name
* @returns {string} rendered template
*/
function renderBenchmark( opts ) {
	var file = replace( TEMPLATES.benchmark, '{{ALIAS}}', opts.alias );
	file = replace( file, '{{YEAR}}', CURRENT_YEAR );
	file = replace( file, '{{COPYRIGHT}}', COPYRIGHT );
	file = replace( file, '{{PRNG}}', opts.prng );
	file = replace( file, '{{RAND_MIN}}', opts.min );
	file = replace( file, '{{RAND_MAX}}', opts.max );
	return file;
}

/**
* Renders an examples template.
*
* @private
* @param {Object} opts - options
* @param {string} opts.alias - alias
* @param {string} opts.desc - description
* @param {string} opts.pkg - reference package
* @param {Array} opts.values - test values
* @param {string} opts.min - minimum value
* @param {string} opts.max - maximum value
* @param {string} opts.prng - PRNG name
* @returns {string} rendered template
*/
function renderExamples( opts ) {
	var file = replace( TEMPLATES.examples, '{{ALIAS}}', opts.alias );
	file = replace( file, '{{YEAR}}', CURRENT_YEAR );
	file = replace( file, '{{COPYRIGHT}}', COPYRIGHT );
	file = replace( file, '{{PRNG}}', opts.prng );
	file = replace( file, '{{RAND_MIN}}', opts.min );
	file = replace( file, '{{RAND_MAX}}', opts.max );
	return file;
}

/**
* Renders a `lib/index.js` template.
*
* @private
* @param {Object} opts - options
* @param {string} opts.alias - alias
* @param {string} opts.desc - description
* @param {string} opts.pkg - reference package
* @param {Array} opts.values - test values
* @param {string} opts.min - minimum value
* @param {string} opts.max - maximum value
* @param {string} opts.prng - PRNG name
* @returns {string} rendered template
*/
function renderLibIndex( opts ) {
	var file = replace( TEMPLATES.lib_index, '{{ALIAS}}', opts.alias );
	file = replace( file, '{{ALIAS_KEBABCASE}}', kebabcase( opts.alias ) );
	file = replace( file, '{{YEAR}}', CURRENT_YEAR );
	file = replace( file, '{{COPYRIGHT}}', COPYRIGHT );
	file = replace( file, '{{DESC}}', opts.desc );
	return file;
}

/**
* Renders a `lib/main.js` template.
*
* @private
* @param {Object} opts - options
* @param {string} opts.alias - alias
* @param {string} opts.desc - description
* @param {string} opts.pkg - reference package
* @param {Array} opts.values - test values
* @param {string} opts.min - minimum value
* @param {string} opts.max - maximum value
* @param {string} opts.prng - PRNG name
* @returns {string} rendered template
*/
function renderLibMain( opts ) {
	var file = replace( TEMPLATES.lib_main, '{{ALIAS}}', opts.alias );
	file = replace( file, '{{YEAR}}', CURRENT_YEAR );
	file = replace( file, '{{COPYRIGHT}}', COPYRIGHT );
	file = replace( file, '{{DESC}}', opts.desc );
	file = replace( file, '{{ALIAS_CONSTANTCASE}}', constantcase( opts.alias ) );
	file = replace( file, '{{VALUES_LEN_1}}', num2str( opts.values[ 0 ] ) );
	return file;
}

/**
* Renders a Makefile template.
*
* @private
* @param {Object} opts - options
* @param {string} opts.alias - alias
* @param {string} opts.desc - description
* @param {string} opts.pkg - reference package
* @param {Array} opts.values - test values
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
* @param {string} opts.desc - description
* @param {string} opts.pkg - reference package
* @param {Array} opts.values - test values
* @param {string} opts.min - minimum value
* @param {string} opts.max - maximum value
* @param {string} opts.prng - PRNG name
* @returns {string} rendered template
*/
function renderPackageJSON( opts ) {
	var file = replace( TEMPLATES.package_json, '{{ALIAS_KEBABCASE}}', kebabcase( opts.alias ) );
	file = replace( file, '{{DESC}}', opts.desc );
	return file;
}

/**
* Renders a test template.
*
* @private
* @param {Object} opts - options
* @param {string} opts.alias - alias
* @param {string} opts.desc - description
* @param {string} opts.pkg - reference package
* @param {Array} opts.values - test values
* @param {string} opts.min - minimum value
* @param {string} opts.max - maximum value
* @param {string} opts.prng - PRNG name
* @returns {string} rendered template
*/
function renderTest( opts ) {
	var file = replace( TEMPLATES.test, '{{ALIAS}}', opts.alias );
	file = replace( file, '{{YEAR}}', CURRENT_YEAR );
	file = replace( file, '{{COPYRIGHT}}', COPYRIGHT );
	file = replace( file, '{{PRNG}}', opts.prng );
	file = replace( file, '{{RAND_MIN}}', opts.min );
	file = replace( file, '{{RAND_MAX}}', opts.max );
	file = replace( file, '{{REF_PKG}}', replace( opts.pkg, '/', '-' ) ); // FIXME: no need to replace once we install `@stdlib/stdlib` instead of standalone pkgs
	file = replace( file, '{{DESC}}', replace( uncapitalize( opts.desc ), '\'', '\\\'' ) );
	return file;
}

/**
* Renders a README template.
*
* @private
* @param {Object} opts - options
* @param {string} opts.alias - alias
* @param {string} opts.desc - description
* @param {string} opts.pkg - reference package
* @param {Array} opts.values - test values
* @param {string} opts.min - minimum value
* @param {string} opts.max - maximum value
* @param {string} opts.prng - PRNG name
* @returns {string} rendered template
*/
function renderREADME( opts ) {
	var file = replace( TEMPLATES.readme, '{{ALIAS}}', opts.alias );
	file = replace( file, '{{ALIAS_KEBABCASE}}', kebabcase( opts.alias ) );
	file = replace( file, '{{YEAR}}', CURRENT_YEAR );
	file = replace( file, '{{COPYRIGHT}}', COPYRIGHT );
	file = replace( file, '{{PRNG}}', opts.prng );
	file = replace( file, '{{RAND_MIN}}', opts.min );
	file = replace( file, '{{RAND_MAX}}', opts.max );
	file = replace( file, '{{DESC}}', opts.desc );
	return file;
}


// MAIN //

/**
* Scaffolds an API.
*
* @param {Object} options - options
* @param {string} options.alias - alias
* @param {string} options.desc - description
* @param {string} options.pkg - reference package
* @param {Array} options.values - test values
* @param {number} options.min - minimum value
* @param {number} options.max - maximum value
* @param {string} options.prng - PRNG name
*/
function scaffold( options ) {
	var folder;
	var fname;
	var opts;
	var file;
	var dir;

	opts = {
		'alias': options.alias,
		'desc': options.desc,
		'pkg': options.pkg,
		'values': options.values.slice(),
		'min': ( options.prng === 'discrete-uniform' ) ? String( options.min ) : num2str( options.min ),
		'max': ( options.prng === 'discrete-uniform' ) ? String( options.max ) : num2str( options.max ),
		'prng': options.prng
	};
	folder = kebabcase( opts.alias ); // FIXME: make configurable

	// FIXME: make package description configurable

	file = renderBenchmark( opts );
	dir = resolve( DEST_DIR, folder, 'benchmark' );
	fname = resolve( dir, 'benchmark.js' );
	mkdirp( dir );
	writeFile( fname, file, OPTS );

	file = renderExamples( opts );
	dir = resolve( DEST_DIR, folder, 'examples' );
	fname = resolve( dir, 'index.js' );
	mkdirp( dir );
	writeFile( fname, file, OPTS );

	file = renderLibIndex( opts );
	dir = resolve( DEST_DIR, folder, 'lib' );
	fname = resolve( dir, 'index.js' );
	mkdirp( dir );
	writeFile( fname, file, OPTS );

	file = renderLibMain( opts );
	dir = resolve( DEST_DIR, folder, 'lib' );
	fname = resolve( dir, 'main.js' );
	mkdirp( dir );
	writeFile( fname, file, OPTS );

	file = renderMakefile( opts );
	dir = resolve( DEST_DIR, folder );
	fname = resolve( dir, 'Makefile' );
	mkdirp( dir );
	writeFile( fname, file, OPTS );

	file = renderPackageJSON( opts );
	dir = resolve( DEST_DIR, folder );
	fname = resolve( dir, 'package.json' );
	mkdirp( dir );
	writeFile( fname, file, OPTS );

	file = renderREADME( opts );
	dir = resolve( DEST_DIR, folder );
	fname = resolve( dir, 'README.md' );
	mkdirp( dir );
	writeFile( fname, file, OPTS );

	file = renderTest( opts );
	dir = resolve( DEST_DIR, folder, 'test' );
	fname = resolve( dir, 'test.js' );
	mkdirp( dir );
	writeFile( fname, file, OPTS );
}


// EXPORTS //

module.exports = scaffold;

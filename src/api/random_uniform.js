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

'use strict';

// MODULES //

var ns = require( './../namespace.js' );


// MAIN //

/**
* Generates pseudorandom numbers drawn fro a continuous uniform distribution.
*
* @customfunction
* @param {number} nrows - number of rows
* @param {number} ncols - number of columns
* @param {number} a - minimum support (inclusive)
* @param {number} b - maximum support (exclusive)
* @param {string} seed - seed option name
* @param {number} seedValue - pseudorandom number generator seed value
* @returns {Array<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_UNIFORM( 10, 1, 0, 10, "seed", 1234 )
*
* @example
* STDLIB_RANDOM_UNIFORM( 10, 1, 0, 10, "seed", 1234 )
*/
function STDLIB_RANDOM_UNIFORM( nrows, ncols, a, b, seed, seedValue ) { // eslint-disable-line no-unused-vars, stdlib/jsdoc-require-throws-tags
	var rand;
	var out;
	var s;
	var o;
	var v;
	var i;

	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = v;
		} else {
			throw new Error( ns.format( 'invalid argument. Unrecognized option. Value: %s.', String( o ) ) );
		}
	}
	if ( s === void 0 ) {
		throw new Error( 'invalid invocation. Must provide a pseudorandom generator seed.' );
	}
	if ( !ns.isPositiveInteger( nrows ) ) {
		throw new TypeError( ns.format( 'invalid argument. Number of rows must be a positive integer. Value: %s.', String( nrows ) ) );
	}
	if ( !ns.isPositiveInteger( ncols ) ) {
		throw new TypeError( ns.format( 'invalid argument. Number of columns must be a positive integer. Value: %s.', String( ncols ) ) );
	}
	rand = ns.random.uniform.factory( a, b, {
		'seed': s
	});
	if ( ncols === 1 ) {
		return ns.filledBy( nrows, rand );
	}
	out = [];
	for ( i = 0; i < nrows; i++ ) {
		out.push( ns.filledBy( ncols, rand ) );
	}
	return out;
}


// EXPORTS //

module.exports = STDLIB_RANDOM_UNIFORM;
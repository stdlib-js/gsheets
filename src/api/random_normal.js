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
* Generates pseudorandom numbers drawn from a normal distribution.
*
* @customfunction
* @param {number} nrows - number of rows
* @param {number} ncols - number of columns
* @param {number} mu - mean
* @param {number} sigma - standard deviation
* @param {string} seed - seed option name
* @param {number|Array<number>} seedValue - pseudorandom number generator seed value
* @returns {Array<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_NORMAL( 10, 1, 2, 5, "seed", 1234 )
*
* @example
* STDLIB_RANDOM_NORMAL( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_NORMAL( nrows, ncols, mu, sigma, seed, seedValue ) { // eslint-disable-line no-unused-vars, stdlib/jsdoc-require-throws-tags
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
			if ( ns.isArray( v ) ) {
				s = ns.flattenArray( v );
			} else if ( ns.isInteger( v ) ) {
				s = v;
			} else {
				throw new TypeError( ns.format( 'invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.', String( v ) ) );
			}
		} else {
			throw new Error( ns.format( 'invalid argument. Unrecognized option. Value: %s.', String( o ) ) );
		}
	}
	if ( s === void 0 ) {
		throw new Error( 'invalid invocation. Must provide a pseudorandom number generator seed.' );
	}
	if ( !ns.isPositiveInteger( nrows ) ) {
		throw new TypeError( ns.format( 'invalid argument. Number of rows must be a positive integer. Value: %s.', String( nrows ) ) );
	}
	if ( !ns.isPositiveInteger( ncols ) ) {
		throw new TypeError( ns.format( 'invalid argument. Number of columns must be a positive integer. Value: %s.', String( ncols ) ) );
	}
	if ( !ns.isNumber( mu ) ) {
		throw new TypeError( ns.format( 'invalid argument. Mean must be a number. Value: %s.', String( mu ) ) );
	}
	if ( !ns.isNumber( sigma ) ) {
		throw new TypeError( ns.format( 'invalid argument. Standard deviation must be a number. Value: %s.', String( sigma ) ) );
	}
	rand = ns.random.normal( mu, sigma, {
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

module.exports = STDLIB_RANDOM_NORMAL;

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
* Generates pseudorandom numbers. Without normalization, generates numbers on the closed interval from 0 to 4294967295. With normalization, generates numbers on the half-open interval from 0 (inclusive) to 1 (exclusive).
*
*
*
* STDLIB_RANDOM_MT19937( 10, 1, "seed", 1234 )
*
*
* STDLIB_RANDOM_MT19937( 10, 1, "seed", 1234, "normalized", FALSE )
*
*
* STDLIB_RANDOM_MT19937( 10, 1, "seed", 1234, "normalized", TRUE )
*
* @customfunction
* @param {number} nrows - number of rows
* @param {number} ncols - number of columns
* @param {string} seed - seed option name
* @param {number} seedValue - pseudorandom number generator seed value
* @param {string} normalized - normalized option name
* @param {boolean} normalizedValue - normalized option value (default: FALSE)
* @returns {Array<number>} pseudorandom numbers
*/
function STDLIB_RANDOM_MT19937( nrows, ncols, seed, seedValue, normalized, normalizedValue ) { // eslint-disable-line no-unused-vars, max-len, stdlib/jsdoc-require-throws-tags
	var rand;
	var flg;
	var out;
	var s;
	var o;
	var v;
	var f;
	var i;

	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = v;
		} else if ( o === 'normalized' ) {
			flg = v;
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
	rand = ns.mt19937.factory({
		'seed': s
	});
	if ( flg ) {
		f = rand.normalized;
	} else {
		f = rand;
	}
	if ( ncols === 1 ) {
		return ns.filledBy( nrows, f );
	}
	out = [];
	for ( i = 0; i < nrows; i++ ) {
		out.push( ns.filledBy( ncols, f ) );
	}
	return out;
}


// EXPORTS //

module.exports = STDLIB_RANDOM_MT19937;

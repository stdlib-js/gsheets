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
* Generates a sawtooth wave.
*
* @customfunction
* @param {number} N - number of values
* @param {string} period - period option name
* @param {number} periodValue - period value (default: 10)
* @param {string} amplitude - amplitude option name
* @param {number} amplitudeValue - amplitude value (default: 1)
* @param {string} offset - phase offset option name
* @param {number} offsetValue - phase offset value (default: 0)
* @returns {Array<number>} simulated values
*
* @example
* STDLIB_SAWTOOTH_WAVE( 10 )
*
* @example
* STDLIB_SAWTOOTH_WAVE( 10, "period", 10 )
*
* @example
* STDLIB_SAWTOOTH_WAVE( 10, "amplitude", 20 )
*
* @example
* STDLIB_SAWTOOTH_WAVE( 10, "offset", 3 )
*
* @example
* STDLIB_SAWTOOTH_WAVE( 10, "period", 10, "amplitude", 20, "offset", 3 )
*/
function STDLIB_SAWTOOTH_WAVE( N, period, periodValue, amplitude, amplitudeValue, offset, offsetValue ) { // eslint-disable-line max-len, no-unused-vars, stdlib/jsdoc-require-throws-tags
	var opts;
	var it;
	var o;
	var v;
	var i;

	if ( !ns.isNonNegativeInteger( N ) ) {
		throw new TypeError( ns.format( 'invalid argument. Number of values must be a nonnegative integer. Value: %s.', String( N ) ) );
	}
	opts = {
		'iter': N
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'period' ) {
			if ( !ns.isPositiveInteger( v ) ) {
				throw new TypeError( ns.format( 'invalid argument. Period must be a positive integer. Value: %s.', String( v ) ) );
			}
			opts[ o ] = v;
		} else if ( o === 'amplitude' ) {
			if ( !ns.isNonNegativeNumber( v ) ) {
				throw new TypeError( ns.format( 'invalid argument. Amplitude must be a nonnegative number. Value: %s.', String( v ) ) );
			}
			opts[ o ] = v;
		} else if ( o === 'offset' ) {
			if ( !ns.isInteger( v ) ) {
				throw new TypeError( ns.format( 'invalid argument. Offset must be an integer. Value: %s.', String( v ) ) );
			}
			opts[ o ] = v;
		} else {
			throw new Error( ns.format( 'invalid argument. Unrecognized option name. Value: %s.', String( o ) ) );
		}
	}
	it = ns.iterSawtoothWave( opts );
	return ns.iterator2array( it );
}


// EXPORTS //

module.exports = STDLIB_SAWTOOTH_WAVE;

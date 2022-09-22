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
* Computes the cumulative maximum.
*
* @customfunction
* @param {Array<Array<number>>} x - range
* @param {string} axis - axis option name
* @param {number} axisValue - axis option value (where 0 indicates across columns and 1 indicates across rows; default: 1)
* @returns {Array<Array<number>>} results
*
* @example
* STDLIB_CUMAX( A1:A100 )
*
* @example
* STDLIB_CUMAX( A1:C100, "axis", 1 )
*
* @example
* STDLIB_CUMAX( A1:C100, "axis", 0 )
*/
function STDLIB_CUMAX( x, axis, axisValue ) { // eslint-disable-line stdlib/jsdoc-require-throws-tags
	var sarray;
	var offset;
	var tmp;
	var ax;
	var so;
	var M;
	var N;
	var o;
	var v;
	var s;
	var i;
	var j;
	if ( !ns.isArray( x ) ) {
		throw new TypeError( ns.format( 'invalid argument. Values argument must be a range. Value: %s.', String( x ) ) );
	}
	ax = 1;
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'axis' ) {
			if ( v !== 0 && v !== 1 ) {
				throw new TypeError( ns.format( 'invalid argument. Axis option must be either 0 or 1. Value: %s.', String( v ) ) );
			}
			ax = v;
		}  else {
			throw new Error( ns.format( 'invalid argument. Unrecognized option name. Value: %s.', String( o ) ) );
		}
	}
	if ( ax === 0 ) {
		M = x.length;      // number of rows
		N = x[ 0 ].length; // number of columns
		so = N;            // offset stride
		s = 1;             // column stride
	} else {
		M = x[ 0 ].length; // number of columns
		N = x.length;      // number of rows
		so = 1;            // offset stride
		s = M;             // row stride
	}
	// Note: at this point, `M` is the number of iterations and `N` is the number of elements over which we need to operate per iteration.

	// Flatten the input array to a strided array in row-major order:
	sarray = ns.flattenArray( x );

	// Set the initial offset which defines the pointer to the first indexed element:
	offset = 0;

	for ( i = 0; i < M; i++ ) {
		ns.cumax( N, sarray, s, offset, sarray, s, offset );
		offset += so;
	}
	// Check for singleton dimensions...
	if ( M === 1 ) {
		// If operating across columns, return a single row...
		if ( ax === 0 ) {
			return [ sarray ];
		}
		// If operating across rows, return a single column:
		return sarray;
	}
	// Reuse the input array as the output array...
	M = x.length;
	N = x[ 0 ].length;
	offset = 0;
	for ( i = 0; i < M; i++ ) {
		tmp = x[ i ];
		for ( j = 0; j < N; j++ ) {
			tmp[ j ] = sarray[ offset ];
			offset += 1;
		}
	}
	return x;
}


// EXPORTS //

module.exports = STDLIB_CUMAX;

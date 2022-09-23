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

/* eslint-disable stdlib/jsdoc-doctest-marker, stdlib/jsdoc-doctest-quote-props */

'use strict';

// MODULES //

var ns = require( './../namespace.js' );


// MAIN //

/**
* Computes the cumulative maximum value.
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
function STDLIB_CUMAX( x, axis, axisValue ) { // eslint-disable-line no-unused-vars
	var sarray;
	var offset;
	var tmp;
	var ax;
	var M;
	var N;
	var o;
	var v;
	var i;
	var j;

	ns.assert.isRange( x, 'First argument' );

	ax = 1;
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'axis' ) {
			ns.assert.isOneOf( v, [ 0, 1 ], 'axis' );
			ax = v;
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	// Check for the simple case where we're provided a range in row-major order and asked to operate across columns...
	if ( ax === 0 ) {
		M = x.length;
		N = x[ 0 ].length;
		for ( i = 0; i < M; i++ ) {
			ns.cumax( N, x[ i ], 1, 0, x[ i ], 1, 0 );
		}
		return x;
	}
	// More complex case where we're provided a range in row-major order, but asked to operate across rows...
	M = x[ 0 ].length; // number of columns
	N = x.length;      // number of rows

	// Flatten the input array to a strided array in row-major order:
	sarray = ns.flattenArray( x );

	// Set the offset which defines the pointer to the first indexed element in a column:
	offset = 0;

	// Iterate over rows...
	for ( i = 0; i < M; i++ ) {
		ns.cumax( N, sarray, M, offset, sarray, M, offset );
		offset += 1;
	}
	// Check for a singleton dimension and whether we can avoid performing a copy...
	if ( M === 1 ) {
		return sarray;
	}
	// Reuse the input array as the output array...
	offset = 0;
	for ( i = 0; i < N; i++ ) {
		tmp = x[ i ];
		for ( j = 0; j < M; j++ ) {
			tmp[ j ] = sarray[ offset ];
			offset += 1;
		}
	}
	return x;
}


// EXPORTS //

module.exports = STDLIB_CUMAX;

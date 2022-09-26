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
* Computes the maximum value according to a mask.
*
* ## Notes
*
* -
*
* @customfunction
* @param {Range<number>} x - input range
* @param {Range<integer>} mask - mask range
* @param {string} axis - axis option name
* @param {integer} axisValue - axis option value (where `0` indicates across columns and `1` indicates across rows; default: `1`)
* @returns {Range<number>} results
*
* @example
* STDLIB_MSKMAX( A1:A100, B1:B100 )
*
* @example
* STDLIB_MSKMAX( A1:C100, D1:D100 )
*
* @example
* STDLIB_MSKMAX( A1:C100, D1:F100, "axis", 1 )
*
* @example
* STDLIB_MSKMAX( A1:C100, D1:F100, "axis", 0 )
*/
function STDLIB_MSKMAX( x, mask, axis, axisValue ) { // eslint-disable-line no-unused-vars
	var sarray;
	var smask;
	var out;
	var som;
	var ax;
	var sm;
	var ox;
	var om;
	var M;
	var N;
	var o;
	var v;
	var i;
	var j;

	ns.assert.isRange( x, 'First argument' );
	ns.assert.isRange( mask, 'Second argument' );
	ns.assert.isBroadcastCompatibleWith( x, mask, 'Second argument', 'first argument' );

	ax = 1;
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'axis' ) {
			ns.assert.isOneOf( v, [ 0, 1 ], 'axis' );
			ax = v;
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	out = [];

	// Check for the simple case where we're provided a range in row-major order and asked to operate across columns...
	if ( ax === 0 ) {
		M = x.length;
		N = x[ 0 ].length;

		// Check whether we need to broadcast the mask array...
		if ( mask.length === 1 ) {
			// Set the mask "stride" to zero to always use the same mask array:
			som = 0;
		} else {
			som = 1;
		}
		j = 0;
		for ( i = 0; i < M; i++ ) {
			out.push( ns.mskmax( N, x[ i ], 1, 0, mask[ j ], 1, 0 ) );
			j += som;
		}
		return out;
	}
	// More complex case where we're provided a range in row-major order, but asked to operate across rows...
	M = x[ 0 ].length; // number of columns
	N = x.length;      // number of rows

	// Flatten the input arrays to strided arrays in row-major order:
	sarray = ns.flattenArray( x );
	smask = ns.flattenArray( mask );

	// Check whether we need to broadcast the mask array...
	if ( mask[ 0 ].length === 1 ) {
		sm = 1;  // mask array stride
		som = 0; // offset stride for mask array
	} else {
		sm = M;  // multiple columns, so need to specify an increment to index column values
		som = 1; // multiple columns, so need to specify an increment to locate the first indexed value for a column
	}
	// Set the offsets which define the pointers to the first indexed element in a column:
	ox = 0;
	om = 0;

	// Iterate over rows...
	for ( i = 0; i < M; i++ ) {
		out.push( ns.mskmax( N, sarray, M, ox, smask, sm, om ) );
		ox += 1;
		om += som;
	}
	return [ out ];
}


// EXPORTS //

module.exports = STDLIB_MSKMAX;

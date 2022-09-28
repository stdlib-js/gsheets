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

// MAIN //

/**
* Applies a ternary function to three two-dimensional input arrays.
*
* @private
* @param {Array<Array<number>>} arrays - strided input arrays
* @param {Array<integer>} shape - output array shape
* @param {Array<Array<integer>>} strides - array strides
* @param {Function} fcn - function to apply
* @returns {Array<Array<number>>} results
*/
function ternary2d( arrays, shape, strides, fcn ) {
	var out;
	var tmp;
	var dx0;
	var dx1;
	var dy0;
	var dy1;
	var dz0;
	var dz1;
	var sx;
	var sy;
	var sz;
	var ix;
	var iy;
	var iz;
	var S0;
	var S1;
	var x;
	var y;
	var z;
	var i;
	var j;

	S0 = shape[ 1 ];
	S1 = shape[ 0 ];

	x = arrays[ 0 ];
	y = arrays[ 1 ];
	z = arrays[ 2 ];

	sx = strides[ 0 ];
	sy = strides[ 1 ];
	sz = strides[ 2 ];

	dx0 = sx[ 1 ];              // offset increment for innermost loop
	dx1 = sx[ 0 ] - ( S0*dx0 ); // offset increment for outermost loop
	dy0 = sy[ 1 ];
	dy1 = sy[ 0 ] - ( S0*dy0 );
	dz0 = sz[ 1 ];
	dz1 = sz[ 0 ] - ( S0*dz0 );

	ix = 0;
	iy = 0;
	iz = 0;

	out = [];
	for ( i = 0; i < S1; i++ ) {
		tmp = [];
		for ( j = 0; j < S0; j++ ) {
			tmp.push( fcn( x[ ix ], y[ iy ], z[ iz ] ) );
			ix += dx0;
			iy += dy0;
			iz += dz0;
		}
		out.push( tmp );
		ix += dx1;
		iy += dy1;
		iz += dz1;
	}
	return out;
}


// EXPORTS //

module.exports = ternary2d;

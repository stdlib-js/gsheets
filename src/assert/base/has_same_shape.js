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
* Tests whether two or more two-dimensional nested arrays have the same shape.
*
* ## Notes
*
* -   The function assumes that each nested array has the same length (i.e., an input array is not a ragged array).
*
* @private
* @param {Array<Array>} x1 - first input array
* @param {Array<Array>} x2 - second input array
* @param {...Array<Array>} [arrays] - additional input arrays
* @returns {boolean} boolean indicating whether two or more two-dimensional nested arrays have the same shape
*
* @example
* var bool = hasSameShape( [ [ 1 ] ], [ [ 2 ] ] );
* // returns true
*
* @example
* var bool = hasSameShape( [ [ 1, 2 ], [ 3, 4 ] ], [ [ 1, 2 ] ] );
* // returns false
*
* @example
* var bool = hasSameShape( [ [ 1, 2, 3 ] ], [ [ 1, 2 ] ] );
* // returns false
*/
function hasSameShape( x1 ) {
	var M;
	var N;
	var x;
	var i;

	M = x1.length;
	N = x1[ 0 ].length;
	for ( i = 1; i < arguments.length; i++ ) {
		x = arguments[ i ];
		if ( x.length !== M || x[ 0 ].length !== N ) {
			return false;
		}
	}
	return true;
}


// EXPORTS //

module.exports = hasSameShape;

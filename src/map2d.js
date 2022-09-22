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
* Applies a function to each nested element in an array of arrays and updates the input array in-place.
*
* @param {Array<Array>} arr - array of arrays
* @param {Function} fcn - function to apply
* @returns {Array<Array>} array of arrays
*
* @example
* function scale( v ) {
*     return v * 10;
* }
*
* var arr = [
*     [ 1, 2, 3 ],
*     [ 4, 5, 6 ]
* ];
*
* var out = map2d( arr, scale );
* // returns [ [ 10, 20, 30 ], [ 40, 50, 60 ] ]
*
* var bool = ( arr === out );
* // returns true
*/
function map2d( arr, fcn ) {
	var M;
	var N;
	var a;
	var i;
	var j;

	M = arr.length;
	N = arr[ 0 ].length;
	for ( i = 0; i < M; i++ ) {
		a = arr[ i ];
		for ( j = 0; j < N; j++ ) {
			a[ j ] = fcn( a[ j ] );
		}
	}
	return arr;
}


// EXPORTS //

module.exports = map2d;

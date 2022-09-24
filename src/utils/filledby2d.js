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

var fill = require( '@stdlib/array-base-filled-by' );


// MAIN //

/**
* Returns a filled array according to a provided callback function.
*
* ## Notes
*
* -   If the output array only has one column, the function returns a one-dimensional array. Otherwise, the function returns an array of arrays.
*
* @private
* @param {number} nrows - number of rows
* @param {number} ncols - number of columns
* @param {Function} fcn - callback function
* @returns {Array} filled array
*
* @example
* function constant( v ) {
*     return 5;
* }
*
* var out = filledBy( 2, 2, constant );
* // returns [ [ 5, 5 ], [ 5, 5 ] ]
*
* out = filledBy( 1, 2, constant );
* // returns [ [ 5, 5 ] ]
*
* out = filledBy( 2, 1, constant );
* // returns [ 5, 5 ]
*/
function filledBy( nrows, ncols, fcn ) {
	var out;
	var i;
	if ( ncols === 1 ) {
		return fill( nrows, fcn );
	}
	out = [];
	for ( i = 0; i < nrows; i++ ) {
		out.push( fill( ncols, fcn ) );
	}
	return out;
}


// EXPORTS //

module.exports = filledBy;

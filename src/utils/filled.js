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

var filled1d = require( '@stdlib/array-base-filled' );
var filled2d = require( '@stdlib/array-base-filled2d' );


// MAIN //

/**
* Returns a filled array.
*
* ## Notes
*
* -   If the output array only has one column, the function returns a one-dimensional array. Otherwise, the function returns an array of arrays.
*
* @private
* @param {number} nrows - number of rows
* @param {number} ncols - number of columns
* @param {*} value - fill value
* @returns {Array} filled array
*
* @example
* var out = filled( 2, 2, 5 );
* // returns [ [ 5, 5 ], [ 5, 5 ] ]
*
* out = filled( 1, 2, 5 );
* // returns [ [ 5, 5 ] ]
*
* out = filled( 2, 1, 5 );
* // returns [ 5, 5 ]
*/
function filled( nrows, ncols, value ) {
	if ( ncols === 1 ) {
		return filled1d( value, nrows );
	}
	return filled2d( value, [ nrows, ncols ] );
}


// EXPORTS //

module.exports = filled;

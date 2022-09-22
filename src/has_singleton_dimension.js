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
* Tests whether a two-dimensional nested array has a dimension whose size equals unity.
*
* ## Notes
*
* -   The function assumes that each nested array has the same length (i.e., an input array is not a ragged array).
*
* @private
* @param {Array<Array>} arr - input array
* @returns {boolean} boolean indicating whether a nested array has a singleton dimension
*
* @example
* var bool = hasSingletonDimension( [ [ 1 ] ] );
* // returns true
*
* @example
* var bool = hasSingletonDimension( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns false
*
* @example
* var bool = hasSingletonDimension( [ [ 1, 2, 3 ] ] );
* // returns true
*/
function hasSingletonDimension( arr ) {
	return ( arr.length === 1 || arr[ 0 ].length === 1 );
}


// EXPORTS //

module.exports = hasSingletonDimension;
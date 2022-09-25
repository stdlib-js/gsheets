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

var isArray = require( '@stdlib/assert-is-array' );
var hasSingletonDimension = require( './has_singleton_dimension.js' );


// MAIN //

/**
* Tests whether a value is a one-dimensional range (i.e., a range consisting of either a single row or a single column).
*
* @private
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether a value is a one-dimensional range
*/
function isRange1d( value ) {
	return ( isArray( value ) && hasSingletonDimension( value ) );
}


// EXPORTS //

module.exports = isRange1d;

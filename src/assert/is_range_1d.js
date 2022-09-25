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

var format = require( '@stdlib/string-format' );
var isRange1d = require( './base/is_range_1d.js' );


// MAIN //

/**
* Asserts whether a value is a one-dimensional range (i.e., a range consisting of either a single row or a single column).
*
* @private
* @param {*} value - value to test
* @param {string} msg - message subject
* @throws {TypeError} must provide a range
* @throws {TypeError} must provide a range consisting of only a single row or a single column
* @returns {void}
*/
function assert( value, msg ) {
	if ( isRange1d( value ) ) {
		return;
	}
	throw new TypeError( format( 'invalid argument. %s must consist of only a single row or a single column.', msg ) );
}


// EXPORTS //

module.exports = assert;

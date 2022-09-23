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
var hasSameShape = require( './base/has_same_shape.js' );


// MAIN //

/**
* Asserts whether two input ranges are the same shape.
*
* @private
* @param {Array<Array>} x - first input range
* @param {Array<Array>} y - second input range
* @param {string} msg - message subject
* @throws {TypeError} must provide ranges having the same shape
* @returns {void}
*/
function assert( x, y, msg ) {
	if ( hasSameShape( x, y ) ) {
		return;
	}
	throw new TypeError( format( 'invalid argument. %s must have the same shape (i.e., the same number of rows and columns). Value: %s.', msg, String( value ) ) );
}


// EXPORTS //

module.exports = assert;

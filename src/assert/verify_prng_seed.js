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
var isInteger = require( '@stdlib/assert-is-integer' ).isPrimitive;
var format = require( '@stdlib/string-format' );
var flattenArray = require( '@stdlib/gsheets/utils/flatten2d' );


// MAIN //

/**
* Verifies a pseudorandom number generator seed argument.
*
* @private
* @param {*} value - value to test
* @throws {TypeError} must provide a valid pseudorandom number generator seed
* @returns {(number|Array<number>)} pseudorandom number generator seed
*/
function assert( value ) {
	if ( isInteger( value ) ) {
		return value;
	}
	if ( isArray( value ) ) {
		return flattenArray( value );
	}
	throw new TypeError( format( 'invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.', String( value ) ) );
}


// EXPORTS //

module.exports = assert;

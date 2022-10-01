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

var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
var isBetween = require( '@stdlib/assert-is-between' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Asserts whether a value is between two values.
*
* @private
* @param {*} value - value to test
* @param {number} a - left comparison value
* @param {number} b - right comparison value
* @param {string} left - indicates whether the left comparison value is inclusive
* @param {string} right - indicates whether the right comparison value is inclusive
* @param {string} msg - message subject
* @throws {TypeError} must provide a number
* @throws {TypeError} must provide a number between two values
* @returns {void}
*/
function assert( value, a, b, left, right, msg ) {
	var l;
	var r;
	if ( isNumber( value ) && isBetween( value, a, b, left, right ) ) {
		return;
	}
	if ( left === 'closed' ) {
		l = '[';
	} else {
		l = '(';
	}
	if ( right === 'closed' ) {
		r = ']';
	} else {
		r = ')';
	}
	throw new TypeError( format( 'invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.', msg, l, a, b, r, String( value ) ) );
}


// EXPORTS //

module.exports = assert;

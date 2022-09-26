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
var isBroadcastCompatible = require( './base/is_broadcast_compatible_with.js' );


// MAIN //

/**
* Asserts whether a second input range is broadcast compatible with a provided input range.
*
* @private
* @param {Array<Array>} x - first input range (i.e., the range to test against)
* @param {Array<Array>} y - second input range
* @param {string} subject - message subject
* @param {string} object - message object
* @throws {TypeError} must provide a broadcast compatible range
* @returns {void}
*/
function assert( x, y, subject, object ) {
	if ( isBroadcastCompatible( x, y ) ) {
		return;
	}
	throw new TypeError( format( 'invalid argument. %s must be broadcast compatible with %s.', subject, object ) );
}


// EXPORTS //

module.exports = assert;

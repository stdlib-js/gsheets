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


// MAIN //

/**
* Asserts whether a value is one of a provided list of values.
*
* @private
* @param {*} value - value to test
* @param {Array} list - list of values
* @param {string} msg - message subject
* @throws {TypeError} must provide a string
* @returns {void}
*/
function assert( value, list, msg ) {
	if ( list.indexOf( value ) >= 0 ) {
		return;
	}
	throw new TypeError( format( 'invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.', msg, list.join( '", "' ), String( value ) ) );
}


// EXPORTS //

module.exports = assert;

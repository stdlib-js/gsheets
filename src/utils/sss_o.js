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

var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Wraps a ternary function which accepts three strings.
*
* @private
* @param {Function} fcn - function to apply
* @returns {Function} wrapper
*/
function wrap( fcn ) {
	return wrapper;

	/**
	* Invokes a ternary function.
	*
	* @private
	* @param {string} v1 - first argument
	* @param {string} v2 - second argument
	* @param {string} v3 - third argument
	* @throws {TypeError} first argument must be a string or a range of strings
	* @throws {TypeError} second argument must be a string or a range of strings
	* @throws {TypeError} third argument must be a string or a range of strings
	* @returns {string} result
	*/
	function wrapper( v1, v2 ) {
		if ( !isString( v1 ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be a string or a range of strings. Value: %s.', String( v1 ) ) );
		}
		if ( !isString( v2 ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a string or a range of strings. Value: %s.', String( v2 ) ) );
		}
		if ( !isString( v3 ) ) {
			throw new TypeError( format( 'invalid argument. Third argument must be a string or a range of strings. Value: %s.', String( v3 ) ) );
		}
		return fcn( v1, v2, v3 );
	}
}


// EXPORTS //

module.exports = wrap;
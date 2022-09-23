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
var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var format = require( '@stdlib/string-format' );
var map2d = require( './map2d.js' );


// MAIN //

/**
* Returns a function which applies a unary function to each element in a nested array of arrays.
*
* ## Notes
*
* -   The returned function accepts both a single string argument and a nested array of arrays.
* -   If provided a nested array of arrays, the returned function assumes that all nested array values are the same data type.
*
* @private
* @param {Function} fcn - function to apply
* @returns {Function} function which applies a unary function
*/
function apply( fcn ) {
	return unary;

	/**
	* Applies a unary function accepting a string to each element in a nested array of arrays.
	*
	* @private
	* @param {(string|Array<Array<string>>)} value(s) - value(s)
	* @returns {(string|Array<Array<string>>)} result(s)
	*/
	function unary( value ) {
		if ( isArray( value ) ) {
			return map2d( value, wrapper );
		}
		return wrapper( value );
	}

	/**
	* Invokes a unary function.
	*
	* @private
	* @param {*} value - input value
	* @throws {TypeError} must provide a string
	* @returns {string} result
	*/
	function wrapper( value ) {
		if ( !isString( value ) ) {
			throw new TypeError( format( 'invalid argument. Must be a string or a range of strings. Value: %s.', String( value ) ) );
		}
		return fcn( value );
	}
}


// EXPORTS //

module.exports = apply;

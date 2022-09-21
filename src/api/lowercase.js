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

var ns = require( './../namespace.js' );


// FUNCTIONS //

/**
* Converts a string to lowercase.
*
* @private
* @param {*} value - string to convert
* @throws {TypeError} must provide a string
* @returns {string} converted string
*/
function __LOWERCASE( value ) {
	if ( !ns.isString( value ) ) {
		throw new TypeError( ns.format( 'Must be a string. Value: %s.', String( value ) ) );
	}
	return ns.lowercase( value );
}


// MAIN //

/**
* Converts a string to lowercase.
*
* STDLIB_LOWERCASE( "FooBar" )
* STDLIB_LOWERCASE( A2:A )
* STDLIB_LOWERCASE( A2:D100 )
*
* @customfunction
* @param {string|Array<Array<string>>} value - string(s) to convert
* @throws {TypeError} input values must be strings
* @returns {string|Array<Array<string>>} converted string(s)
*/
function STDLIB_LOWERCASE( value ) {
	if ( ns.isArray( value ) ) {
		return ns.map2d( value, __LOWERCASE );
	}
	return __LOWERCASE( value );
}


// EXPORTS //

module.exports = STDLIB_LOWERCASE;

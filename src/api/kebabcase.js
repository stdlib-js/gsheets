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

/* eslint-disable stdlib/jsdoc-doctest-marker, stdlib/jsdoc-doctest-quote-props */

'use strict';

// MODULES //

var ns = require( './../namespace.js' );


// VARIABLES //

var __STDLIB_KEBABCASE = ns.tools.s_s( ns.kebabcase ); // eslint-disable-line no-underscore-dangle


// MAIN //

/**
* Converts a string to kebab case.
*
* @customfunction
* @param {string|Range<string>} value - string(s) to convert
* @returns {string|Range<string>} converted string(s)
*
* @example
* STDLIB_KEBABCASE( "FooBar" )
*
* @example
* STDLIB_KEBABCASE( A2:A )
*
* @example
* STDLIB_KEBABCASE( A2:D100 )
*/
function STDLIB_KEBABCASE( value ) {
	return __STDLIB_KEBABCASE( value );
}


// EXPORTS //

module.exports = STDLIB_KEBABCASE;

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

var __STDLIB_CAPITALIZE = ns.tools.s_s( ns.capitalize ); // eslint-disable-line no-underscore-dangle


// MAIN //

/**
* Capitalizes the first character in a string.
*
* @customfunction
* @param {string|Range<string>} value - input string(s)
* @returns {string|Range<string>} transformed string(s)
*
* @example
* STDLIB_CAPITALIZE( "beep boop" )
*
* @example
* STDLIB_CAPITALIZE( A2:A )
*
* @example
* STDLIB_CAPITALIZE( A2:D100 )
*/
function STDLIB_CAPITALIZE( value ) {
	return __STDLIB_CAPITALIZE( value );
}


// EXPORTS //

module.exports = STDLIB_CAPITALIZE;

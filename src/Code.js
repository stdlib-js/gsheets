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

/**
* This file contains all functions which should be exposed to clients.
*/

/* eslint-disable no-unused-vars, stdlib/jsdoc-private-annotation, stdlib/jsdoc-tag-names */

/* globals ns */

'use strict';

// MAIN //

/**
* Converts a string to kebab-case.
*
* @customfunction
* @param {(string|Array<Array<string>>)} value - string(s) to convert
* @returns {(string|Array<Array<string>>)} converted string(s)
*/
function STDLIB_KEBABCASE( value ) {
	if ( ns.isArray( value ) ) {
		return ns.map2d( value, ns.naryFunction( ns.kebabcase, 1 ) );
	}
	return ns.kebabcase( value );
}

/**
* Converts a string to lowercase.
*
* @customfunction
* @param {(string|Array<Array<string>>)} value - string(s) to convert
* @returns {(string|Array<Array<string>>)} converted string(s)
*/
function STDLIB_LOWERCASE( value ) {
	if ( ns.isArray( value ) ) {
		return ns.map2d( value, ns.naryFunction( ns.lowercase, 1 ) );
	}
	return ns.lowercase( value );
}

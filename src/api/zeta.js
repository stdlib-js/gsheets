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
* Evaluates the Riemann zeta function as a function of a real variable.
*
* @private
* @param {*} value - input value
* @throws {TypeError} must provide a number
* @returns {number} result
*/
function __ZETA( value ) {
	if ( !ns.isNumber( value ) ) {
		throw new TypeError( ns.format( 'invalid argument. Must be a number or a range of numbers. Value: %s.', String( value ) ) );
	}
	return ns.zeta( value );
}


// MAIN //

/**
* Evaluates the Riemann zeta function as a function of a real variable.
*
* @customfunction
* @param {number|Array<Array<number>>} value - input value(s)
* @returns {number|Array<Array<number>>} result(s)
*
* @example
* STDLIB_ZETA( 1.2 )
*
* @example
* STDLIB_ZETA( A1:A100 )
*
* @example
* STDLIB_ZETA( A1:D100 )
*/
function STDLIB_ZETA( value ) {
	if ( ns.isArray( value ) ) {
		return ns.map2d( value, __ZETA );
	}
	return __ZETA( value );
}


// EXPORTS //

module.exports = STDLIB_ZETA;
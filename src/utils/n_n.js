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
var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
var format = require( '@stdlib/string-format' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var map2d = require( './map2d.js' );


// MAIN //

/**
* Returns a function which applies a unary function to each element in a nested array of arrays.
*
* ## Notes
*
* -   The returned function accepts both a single scalar argument and a nested array of arrays.
* -   If provided a nested array of arrays, the returned function assumes that all nested array values are the same data type.
*
* @private
* @param {Function} fcn - function to apply
* @param {Object} opts - options
* @param {*} opts.nonnumeric - value to return in place of raising an exception when an input value is not numeric
* @param {*} opts.nan - value to return in place of NaN
* @param {*} opts.pinf - value to return in place of positive infinity
* @param {*} opts.ninf - value to return in place of negative infinity
* @returns {Function} function which applies a unary function
*/
function apply( fcn, opts ) {
	return unary;

	/**
	* Applies a unary function accepting a number to each element in a nested array of arrays.
	*
	* @private
	* @param {(number|Array<Array<number>>)} value(s) - value(s)
	* @returns {(number|Array<Array<number>>)} result(s)
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
	* @throws {TypeError} must provide a number
	* @returns {number} result
	*/
	function wrapper( value ) {
		var v;
		if ( !isNumber( value ) ) {
			if ( opts.nonnumeric === void 0 ) {
				throw new TypeError( format( 'invalid argument. Must be a number or a range of numbers. Value: %s.', String( value ) ) );
			}
			return opts.nonnumeric;
		}
		v = fcn( value );
		if ( v !== v ) {
			return opts.nan;
		}
		if ( v === PINF ) {
			return opts.pinf;
		}
		if ( v === NINF ) {
			return opts.ninf;
		}
		return v;
	}
}


// EXPORTS //

module.exports = apply;

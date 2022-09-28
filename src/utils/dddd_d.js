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

var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Wraps a quaternary function which accepts four numbers and returns a number.
*
* @private
* @param {Function} fcn - quaternary function
* @param {Object} opts - options
* @param {*} opts.nonnumeric - value to return in place of raising an exception when an input value is not a number
* @param {*} opts.nan - value to return in place of NaN
* @param {*} opts.pinf - value to return in place of positive infinity
* @param {*} opts.ninf - value to return in place of negative infinity
* @returns {Function} wrapper
*/
function wrap( fcn, opts ) {
	return wrapper;

	/**
	* Invokes a quaternary function.
	*
	* @private
	* @param {*} x1 - first argument
	* @param {*} x2 - second argument
	* @param {*} x3 - third argument
	* @param {*} x4 - fourth argument
	* @throws {TypeError} first argument must be a number or a range of numbers
	* @throws {TypeError} second argument must be a number or a range of numbers
	* @throws {TypeError} third argument must be a number or a range of numbers
	* @throws {TypeError} fourth argument must be a number or a range of numbers
	* @returns {number} result
	*/
	function wrapper( x1, x2, x3, x4 ) {
		var v;
		if ( !isNumber( x1 ) ) {
			if ( opts.nonnumeric === void 0 ) {
				throw new TypeError( format( 'invalid argument. First argument must be a number or a range of numbers. Value: %s.', String( x1 ) ) );
			}
			return opts.nonnumeric;
		}
		if ( !isNumber( x2 ) ) {
			if ( opts.nonnumeric === void 0 ) {
				throw new TypeError( format( 'invalid argument. Second argument must be a number or a range of numbers. Value: %s.', String( x2 ) ) );
			}
			return opts.nonnumeric;
		}
		if ( !isNumber( x3 ) ) {
			if ( opts.nonnumeric === void 0 ) {
				throw new TypeError( format( 'invalid argument. Third argument must be a number or a range of numbers. Value: %s.', String( x3 ) ) );
			}
			return opts.nonnumeric;
		}
		if ( !isNumber( x4 ) ) {
			if ( opts.nonnumeric === void 0 ) {
				throw new TypeError( format( 'invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.', String( x4 ) ) );
			}
			return opts.nonnumeric;
		}
		v = fcn( x1, x2, x3, x4 );
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

module.exports = wrap;

/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

/* This is a generated file. Do not edit directly. */

/* eslint-disable stdlib/jsdoc-doctest-marker, stdlib/jsdoc-doctest-quote-props */

'use strict';

// MODULES //

var ns = require( './../../namespace' );


// VARIABLES //

var __STDLIB_MUL_DTYPES = [ 'number', 'number' ]; // eslint-disable-line no-underscore-dangle
var __STDLIB_MUL_MSGS = [ 'First argument', 'Second argument' ]; // eslint-disable-line no-underscore-dangle


// MAIN //

/**
* Computes the product.
*
* @customfunction
* @param {number|Range<number>} x - input value(s)
* @param {number|Range<number>} y - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {Range<number>} result(s)
*
* @example
* STDLIB_MUL( -1.2, 3.1 )
*
* @example
* STDLIB_MUL( A1:A100, B1:B100 )
*
* @example
* STDLIB_MUL( A1:D100, 3.1 )
*
* @example
* STDLIB_MUL( A1:A100, B1:E100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_MUL( x, y, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { // eslint-disable-line no-unused-vars
	var shape;
	var args;
	var opts;
	var out;
	var f;
	var o;
	var i;

	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	// Normalize the provided arguments so we are always working with nested arrays:
	args = ns.normalizeBroadcastArgs( [ x, y ], __STDLIB_MUL_DTYPES, __STDLIB_MUL_MSGS ); // eslint-disable-line max-len

	// Resolve the shape of the broadcasted result:
	shape = ns.broadcastShapes( args[ 1 ] );
	if ( shape === null ) {
		throw new Error( 'invalid argument. Input arguments are not broadcast compatible.' );
	}
	// Create an output array:
	out = ns.zeros2d( shape );

	// Wrap the lower-level function to ensure proper handling of input arguments and return values:
	f = ns.tools.dd_d( ns.mul, opts );

	// Apply the function to broadcasted arrays:
	args[ 0 ].push( out );
	args[ 1 ].push( shape );
	ns.tools.bbinary2d( args[ 0 ], args[ 1 ], f );
	return out;
}


// EXPORTS //

module.exports = STDLIB_MUL;

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
var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var isArray = require( '@stdlib/assert-is-array' );
var broadcastShapes = require( '@stdlib/ndarray-base-broadcast-shapes' );
var format = require( '@stdlib/string-format' );
var flatten = require( './flatten2d.js' );


// VARIABLES //

var assert = {
	'number': isNumber,
	'string': isString,
	'boolean': isBoolean
};


// MAIN //

/**
* Broadcasts values (scalars and arrays) to a single shape.
*
* @private
* @param {Array} values - values to broadcast
* @param {Array<string>} dtypes - value data types
* @param {Array<string>} msgs - error message subjects
* @throws {RangeError} input arrays must have the same length
* @throws {TypeError} invalid argument
* @throws {Error} must provide broadcast compatible arrays
* @returns {Array} broadcast results
*/
function broadcast( values, dtypes, msgs ) {
	var strides;
	var arrays;
	var shapes;
	var shape;
	var dt;
	var s;
	var d;
	var f;
	var v;
	var i;

	if ( values.length !== dtypes.length || dtypes.length !== msgs.length ) {
		throw new RangeError( 'invalid argument. Input arguments must have the same length.' );
	}
	// Resolve the shapes of the input arrays...
	shapes = [];
	arrays = [];
	for ( i = 0; i < values.length; i++ ) {
		v = values[ i ];
		dt = dtypes[ i ];
		f = assert[ dt ];
		if ( f( v ) ) {
			arrays.push( [ v ] );
			shapes.push( [ 1, 1 ] );
		} else if ( isArray( v ) ) {
			arrays.push( flatten( v ) );
			shapes.push( [ v.length, v[ 0 ].length ] );
		} else {
			throw new TypeError( format( 'invalid argument. %s must be either a %s or a range of %ss. Value: %s.', msgs[ i ], dt, dt, String( v ) ) );
		}
	}
	// Resolve the shape of the broadcasted result...
	shape = broadcastShapes( shapes );
	if ( shape === null ) {
		throw new Error( 'invalid argument. Input arguments are not broadcast compatible.' );
	}
	// Resolve the strides of the input arrays (note: we assume row-major order)...
	strides = [];
	for ( i = 0; i < shapes.length; i++ ) {
		d = shapes[ i ];
		s = [];

		/*
		* A couple of notes.
		*
		* -   The following assumes row-major order.
		* -   Given the rules of broadcasting, an array dimension can only be `1`` or equal to the shape of the output array. Hence, in order to broadcast a row or column, we can simply set the stride to `0` for that dimension.
		*/
		if ( d[ 0 ] === 1 ) {
			s.push( 0 );
		} else {
			s.push( shape[ 1 ] );
		}
		if ( d[ 1 ] === 1 ) {
			s.push( 0 );
		} else {
			s.push( 1 );
		}
		strides.push( s );
	}
	return [ arrays, shape, strides ];
}


// EXPORTS //

module.exports = broadcast;

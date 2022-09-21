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


// MAIN //

/**
* Multiplies a vector by a constant and adds the result to another vector.
*
* STDLIB_BLAS_SAXPY( 10, 5, A1:A100, 1, 0, B1:B100, 1, 0 )
*
* @customfunction
* @param {number} N - number of elements on which to operate
* @param {number} alpha - scalar constant
* @param {Array<Array<number>>} x - first vector
* @param {number} strideX - index increment for the first vector
* @param {number} offsetX - index offset for the first vector
* @param {Array<Array<number>>} y - second vector
* @param {number} strideY - index increment for the second vector
* @param {number} offsetY - index offset for the second vector
* @throws {TypeError} first argument must be a nonnegative integer
* @throws {TypeError} second argument must be a number
* @throws {TypeError} fourth argument must be an integer
* @throws {TypeError} fifth argument must be a nonnegative integer
* @throws {TypeError} seventh argument must be an integer
* @throws {TypeError} eighth argument must be a nonnegative integer
* @returns {Array<Array<number>>} results
*/
function STDLIB_BLAS_SAXPY( N, alpha, x, strideX, offsetX, y, strideY, offsetY ) { // eslint-disable-line max-len
	if ( !ns.isNonNegativeInteger( N ) ) {
		throw new TypeError( ns.format( 'invalid argument. Number of elements must be a nonnegative integer. Value: %s.', String( N ) ) );
	}
	if ( !ns.isNumber( alpha ) ) {
		throw new TypeError( ns.format( 'invalid argument. Scalar constant must be a number. Value: %s.', String( alpha ) ) );
	}
	if ( !ns.isInteger( strideX ) ) {
		throw new TypeError( ns.format( 'invalid argument. Stride for first vector must be an integer. Value: %s.', String( strideX ) ) );
	}
	if ( !ns.isNonNegativeInteger( offsetX ) ) {
		throw new TypeError( ns.format( 'invalid argument. Offset for first vector must be a nonnegative integer. Value: %s.', String( offsetX ) ) );
	}
	if ( !ns.isInteger( strideY ) ) {
		throw new TypeError( ns.format( 'invalid argument. Stride for second vector must be an integer. Value: %s.', String( strideY ) ) );
	}
	if ( !ns.isNonNegativeInteger( offsetY ) ) {
		throw new TypeError( ns.format( 'invalid argument. Offset for second vector must be a nonnegative integer. Value: %s.', String( offsetY ) ) );
	}
	return ns.saxpy( N, alpha, ns.flattenArray( x ), strideX, offsetX, ns.flattenArray( y ), strideY, offsetY );
}


// EXPORTS //

module.exports = STDLIB_BLAS_SAXPY;

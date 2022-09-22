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
* @customfunction
* @param {number} N - number of elements on which to operate
* @param {number} alpha - scalar constant
* @param {Array<Array<number>>} x - first vector
* @param {number} strideX - index increment for the first vector
* @param {number} offsetX - index offset for the first vector
* @param {Array<Array<number>>} y - second vector
* @param {number} strideY - index increment for the second vector
* @param {number} offsetY - index offset for the second vector
* @returns {Array<Array<number>>} results
*
* @example
* STDLIB_BLAS_DAXPY( 10, 5, A1:A100, 1, 0, B1:B100, 1, 0 )
*/
function STDLIB_BLAS_DAXPY( N, alpha, x, strideX, offsetX, y, strideY, offsetY ) { // eslint-disable-line max-len, stdlib/jsdoc-require-throws-tags
	if ( !ns.isNonNegativeInteger( N ) ) {
		throw new TypeError( ns.format( 'invalid argument. Number of elements must be a nonnegative integer. Value: %s.', String( N ) ) );
	}
	if ( !ns.isNumber( alpha ) ) {
		throw new TypeError( ns.format( 'invalid argument. Scalar constant must be a number. Value: %s.', String( alpha ) ) );
	}
	if ( !ns.hasSingletonDimension( x ) ) {
		throw new TypeError( 'invalid argument. Range for first vector must consist of only a single row or a single column.' );
	}
	if ( !ns.isInteger( strideX ) ) {
		throw new TypeError( ns.format( 'invalid argument. Stride for first vector must be an integer. Value: %s.', String( strideX ) ) );
	}
	if ( !ns.isNonNegativeInteger( offsetX ) ) {
		throw new TypeError( ns.format( 'invalid argument. Offset for first vector must be a nonnegative integer. Value: %s.', String( offsetX ) ) );
	}
	if ( !ns.hasSingletonDimension( y ) ) {
		throw new TypeError( 'invalid argument. Range for second vector must consist of only a single row or a single column.' );
	}
	if ( !ns.isInteger( strideY ) ) {
		throw new TypeError( ns.format( 'invalid argument. Stride for second vector must be an integer. Value: %s.', String( strideY ) ) );
	}
	if ( !ns.isNonNegativeInteger( offsetY ) ) {
		throw new TypeError( ns.format( 'invalid argument. Offset for second vector must be a nonnegative integer. Value: %s.', String( offsetY ) ) );
	}
	return ns.blas.daxpy( N, alpha, ns.flattenArray( x ), strideX, offsetX, ns.flattenArray( y ), strideY, offsetY );
}


// EXPORTS //

module.exports = STDLIB_BLAS_DAXPY;

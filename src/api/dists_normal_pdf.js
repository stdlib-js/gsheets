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


// MAIN //

/**
* Evaluates the probability density function (PDF) for a normal distribution.
*
* @customfunction
* @param {number|Range<number>} x - value(s) at which to evaluate the PDF
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_PDF( 2, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_PDF( A1:A100, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_PDF( 2, A1:A100, B1:B100 )
*/
function STDLIB_DISTS_NORMAL_PDF( x, mu, sigma ) {
	var strides;
	var offsets;
	var arrays;
	var values;
	var flgs;
	var lens;
	var out;
	var flg;
	var N;
	var M;
	var v;
	var i;
	var j;

	arrays = [ null, null, null ];
	strides = [ 0, 0, 0 ];
	lens = [];
	flg = 0|0;
	if ( ns.isNumber( x ) ) {
		arrays[ 0 ] = [ x ];
	} else if ( ns.isRange1d( x ) ) {
		flg |= ( x.length === 1 ) ? 1 : 2;
		v = ns.flattenArray( x );
		arrays[ 0 ] = v;
		strides[ 0 ] = 1;
		lens.push( v.length );
	} else {
		throw new TypeError( 'invalid argument. First argument must be either a number or a one-dimensional range of numbers. Value: %s.', String( x ) );
	}
	if ( ns.isNumber( mu ) ) {
		arrays[ 1 ] = [ mu ];
	} else if ( ns.isRange1d( mu ) ) {
		flg |= ( mu.length === 1 ) ? 1 : 2;
		v = ns.flattenArray( mu );
		arrays[ 1 ] = v;
		strides[ 1 ] = 1;
		lens.push( v.length );
	} else {
		throw new TypeError( 'invalid argument. Mean must be either a number or a one-dimensional range of numbers. Value: %s.', String( mean ) );
	}
	if ( ns.isPositiveNumber( sigma ) ) {
		arrays[ 2 ] = [ sigma ];
	} else if ( ns.isRange1d( sigma ) ) {
		flg |= ( sigma.length === 1 ) ? 1 : 2;
		v = ns.flattenArray( sigma );
		arrays[ 2 ] = v;
		strides[ 2 ] = 1;
		lens.push( v.length );
	} else {
		throw new TypeError( 'invalid argument. Standard deviation must be either a number or a one-dimensional range of numbers. Value: %s.', String( sigma ) );
	}
	if ( lens.length ) {
		N = lens[ 0 ];
		for ( i = 1; i < lens.length; i++ ) {
			if ( lens[ i ] !== N ) {
				throw new RangeError( 'invalid argument. Input ranges must have the same number of elements.' );
			}
		}
	} else {
		N = 1;
	}
	M = arrays.length;
	values = [ 0, 0, 0 ];
	offsets = [ 0, 0, 0 ];
	out = [];
	for ( i = 0; i < N; i++ ) {
		for ( j = 0; j < M; j++ ) {
			values[ j ] = arrays[ j ][ offsets[ j ] ];
			offsets[ j ] += strides[ j ];
		}
		out.push( ns.dists.normal.pdf.apply( null, values ) );
	}
	// If provided all rows, return a row...
	if ( flg === 1 ) {
		return [ out ];
	}
	return out;
}


// EXPORTS //

module.exports = STDLIB_DISTS_NORMAL_PDF;

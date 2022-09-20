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
* Tests the null hypothesis that the variances in all groups are the same.
*
* @customfunction
* @param {Array<Array<number>>} values - numeric observations
* @param {string} groups - groups option name
* @param {Array<Array<*>>} groupsValue - groups option values
* @param {string} alpha - significance level option name
* @param {number} alphaValue - significance level option value (default: 0.05)
* @param {string} format - results format option name
* @param {string} formatValue - results format option value (either 'print' or 'raw'; default: 'print')
* @returns {string|Array<Array<*>>} results
*/
function STDLIB_BARTLETT_TEST( values, groups, groupsValue, alpha, alphaValue, format, formatValue ) {
	var opts;
	var out;

	opts = {
		'groups': ns.flattenArray( groupsValue )
	};
	if ( alpha ) {
		opts.alpha = alphaValue;
	}
	out = ns.bartlettTest( ns.flattenArray( values ), opts );
	if ( format && formatValue === 'raw' ) {
		return [
			[ 'rejected', out.rejected ],
			[ 'alpha', out.alpha ],
			[ 'df', out.df ],
			[ 'pValue', out.pValue ],
			[ 'statistic', out.statistic ]
		];
	}
	return out.print();
}

/**
* Converts a string to kebab-case.
*
* @customfunction
* @param {string|Array<Array<string>>} value - string(s) to convert
* @returns {string|Array<Array<string>>} converted string(s)
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
* @param {string|Array<Array<string>>} value - string(s) to convert
* @returns {string|Array<Array<string>>} converted string(s)
*/
function STDLIB_LOWERCASE( value ) {
	if ( ns.isArray( value ) ) {
		return ns.map2d( value, ns.naryFunction( ns.lowercase, 1 ) );
	}
	return ns.lowercase( value );
}

/**
* Returns pseudorandom integers on the interval [0, 4294967295].
*
* @customfunction
* @param {number} N - number of values
* @param {number} seed - pseudorandom number generator seed
* @returns {Array<number>} pseudorandom integers
*/
function STDLIB_MT19937( N, seed ) {
	var rand = ns.mt19937.factory({
		'seed': seed
	});
	return ns.filledBy( N, rand );
}

/**
* Returns pseudorandom numbers on the interval [0, 1).
*
* @customfunction
* @param {number} N - number of values
* @param {number} seed - pseudorandom number generator seed
* @returns {Array<number>} pseudorandom numbers
*/
function STDLIB_MT19937_NORMALIZED( N, seed ) {
	var rand = ns.mt19937.factory({
		'seed': seed
	});
	return ns.filledBy( N, rand.normalized );
}

/**
* Generates a sawtooth wave.
*
* STDLIB_SAWTOOTH_WAVE( 10 )
* STDLIB_SAWTOOTH_WAVE( 10, "period", 10 )
* STDLIB_SAWTOOTH_WAVE( 10, "amplitude", 20 )
* STDLIB_SAWTOOTH_WAVE( 10, "offset", 3 )
* STDLIB_SAWTOOTH_WAVE( 10, "period", 10, "amplitude", 20, "offset", 3 )
*
* @customfunction
* @param {number} N - number of values
* @param {string} period - period option name
* @param {number} periodValue - period value (default: 10)
* @param {string} amplitude - amplitude option name
* @param {number} amplitudeValue - amplitude value (default: 1)
* @param {string} offset - phase offset option name
* @param {number} offsetValue - phase offset value (default: 0)
* @returns {Array<number>} simulated values
*/
function STDLIB_SAWTOOTH_WAVE( N, period, periodValue, amplitude, amplitudeValue, offset, offsetValue ) {
	var opts;
	var it;
	var i;

	opts = {
		'iter': N
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		opts[ arguments[ i ] ] = arguments[ i+1 ];
	}
	it = ns.iterSawtoothWave( opts );
	return ns.iterator2array( it );
}

/**
* Evaluates the Riemann zeta function as a function of a real variable.
*
* @customfunction
* @param {number|Array<Array<number>>} value - input value(s)
* @returns {number|Array<Array<number>>} result(s)
*/
function STDLIB_ZETA( value ) {
	if ( ns.isArray( value ) ) {
		return ns.map2d( value, ns.naryFunction( ns.zeta, 1 ) );
	}
	return ns.zeta( value );
}

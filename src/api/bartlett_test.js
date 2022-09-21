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
* Tests the null hypothesis that the variances in all groups are the same.
*
* STDLIB_BARTLETT_TEST( A1:A100, "groups", B1:B100 )
* STDLIB_BARTLETT_TEST( A1:A100, "groups", B1:B100, "alpha", 0.10 )
* STDLIB_BARTLETT_TEST( A1:A100, "groups", B1:B100, "format", "print" )
* STDLIB_BARTLETT_TEST( A1:A100, "groups", B1:B100, "format", "raw" )
* STDLIB_BARTLETT_TEST( A1:A100, "groups", B1:B100, "alpha", 0.10, "format", "print" )
*
* @customfunction
* @param {Array<Array<number>>} values - numeric observations
* @param {string} groups - groups option name
* @param {Array<Array<*>>} groupsValue - groups option values
* @param {string} alpha - significance level option name
* @param {number} alphaValue - significance level option value (default: 0.05)
* @param {string} format - results format option name
* @param {string} formatValue - results format option value (either 'print' or 'raw'; default: 'print')
* @throws {TypeError} observations must be a range
* @throws {TypeError} groups must be a range
* @throws {Error} must provide groups
* @throws {TypeError} significance level must be a number
* @throws {TypeError} format must be a string
* @throws {Error} unrecognized option
* @throws {Error} unrecognized format
* @returns {(string|Array<Array<*>>)} results
*/
function STDLIB_BARTLETT_TEST( values, groups, groupsValue, alpha, alphaValue, format, formatValue ) { // eslint-disable-line no-unused-vars, max-len
	var opts;
	var out;
	var o;
	var v;
	var i;

	if ( !ns.isArray( values ) ) {
		throw new TypeError( ns.format( 'Observations must be a range. Value: %s.', String( values ) ) );
	}
	opts = {};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'groups' ) {
			if ( !ns.isArray( v ) ) {
				throw new TypeError( ns.format( 'Groups must be a range. Value: %s.', String( v ) ) );
			}
			opts[ o ] = ns.flattenArray( v );
		} else if ( o === 'alpha' ) {
			if ( !ns.isNumber( v ) ) {
				throw new TypeError( ns.format( 'Significance level must be a number. Value: %s.', String( v ) ) );
			}
			opts[ o ] = v;
		} else if ( o === 'format' ) {
			if ( !ns.isString( v ) ) {
				throw new TypeError( ns.format( 'Format must be a string. Value: %s.', String( v ) ) );
			}
			if ( v !== 'raw' && v !== 'print' ) {
				throw new Error( ns.format( 'Unrecognized format. Value: %s.', String( v ) ) );
			}
			opts[ o ] = v;
		} else {
			throw new Error( ns.format( 'Unrecognized option. Value: %s.', String( o ) ) );
		}
	}
	if ( !opts.groups ) {
		throw new Error( 'Must provide groups.' );
	}
	out = ns.bartlettTest( ns.flattenArray( values ), opts );
	if ( opts.format === 'raw' ) {
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


// EXPORTS //

module.exports = STDLIB_BARTLETT_TEST;

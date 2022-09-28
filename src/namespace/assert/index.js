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

// MAIN //

/**
* Namespace.
*
* @name ns
* @constant
* @type {Namespace}
*/
var ns = {};
ns.isBoolean = require( './../../assert/is_boolean.js' );
ns.isBroadcastCompatible = require( './../../assert/is_broadcast_compatible.js' );
ns.isBroadcastCompatibleWith = require( './../../assert/is_broadcast_compatible_with.js' );
ns.isDefined = require( './../../assert/is_defined.js' );
ns.isGreaterThan = require( './../../assert/is_greater_than.js' );
ns.isGreaterThanEqual = require( './../../assert/is_greater_than_equal.js' );
ns.isInteger = require( './../../assert/is_integer.js' );
ns.isLessThan = require( './../../assert/is_less_than.js' );
ns.isLessThanEqual = require( './../../assert/is_less_than_equal.js' );
ns.isNonNegativeInteger = require( './../../assert/is_nonnegative_integer.js' );
ns.isNonNegativeNumber = require( './../../assert/is_nonnegative_number.js' );
ns.isNumber = require( './../../assert/is_number.js' );
ns.isOneOf = require( './../../assert/is_one_of.js' );
ns.isPositiveInteger = require( './../../assert/is_positive_integer.js' );
ns.isPositiveNumber = require( './../../assert/is_positive_number.js' );
ns.isProbability = require( './../../assert/is_probability.js' );
ns.isRange = require( './../../assert/is_range.js' );
ns.isRange1d = require( './../../assert/is_range_1d.js' );
ns.isSameShape = require( './../../assert/is_same_shape.js' );
ns.isString = require( './../../assert/is_string.js' );
ns.unrecognizedOptionName = require( './../../assert/unrecognized_option_name.js' );
ns.verifyCommonPRNGArgs = require( './../../assert/verify_common_prng_args.js' );
ns.verifyPRNGSeed = require( './../../assert/verify_prng_seed.js' );


// EXPORTS //

module.exports = ns;

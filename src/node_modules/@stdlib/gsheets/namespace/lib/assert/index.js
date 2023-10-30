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
ns.isBetween = require( '@stdlib/gsheets/assert/is-between' );
ns.isBoolean = require( '@stdlib/gsheets/assert/is-boolean' );
ns.isBroadcastCompatible = require( '@stdlib/gsheets/assert/is-broadcast-compatible' );
ns.isBroadcastCompatibleWith = require( '@stdlib/gsheets/assert/is-broadcast-compatible-with' );
ns.isDefined = require( '@stdlib/gsheets/assert/is-defined' );
ns.isGreaterThan = require( '@stdlib/gsheets/assert/is-greater-than' );
ns.isGreaterThanEqual = require( '@stdlib/gsheets/assert/is-greater-than-equal' );
ns.isInteger = require( '@stdlib/gsheets/assert/is-integer' );
ns.isLessThan = require( '@stdlib/gsheets/assert/is-less-than' );
ns.isLessThanEqual = require( '@stdlib/gsheets/assert/is-less-than-equal' );
ns.isNonNegativeInteger = require( '@stdlib/gsheets/assert/is-nonnegative-integer' );
ns.isNonNegativeNumber = require( '@stdlib/gsheets/assert/is-nonnegative-number' );
ns.isNumber = require( '@stdlib/gsheets/assert/is-number' );
ns.isOneOf = require( '@stdlib/gsheets/assert/is-one-of' );
ns.isPositiveInteger = require( '@stdlib/gsheets/assert/is-positive-integer' );
ns.isPositiveNumber = require( '@stdlib/gsheets/assert/is-positive-number' );
ns.isProbability = require( '@stdlib/gsheets/assert/is-probability' );
ns.isRange = require( '@stdlib/gsheets/assert/is-range' );
ns.isRange1d = require( '@stdlib/gsheets/assert/is-range1d' );
ns.isSameShape = require( '@stdlib/gsheets/assert/is-same-shape' );
ns.isString = require( '@stdlib/gsheets/assert/is-string' );
ns.unrecognizedOptionName = require( '@stdlib/gsheets/assert/unrecognized-option-name' );
ns.verifyCommonPRNGArgs = require( '@stdlib/gsheets/assert/verify-common-prng-args' );


// EXPORTS //

module.exports = ns;

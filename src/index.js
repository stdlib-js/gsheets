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
* This file contains all functions which should be exposed to `Code.gs`.
*/

'use strict';

// MAIN //

/**
* Application namespace.
*
* @name ns
* @constant
* @type {Namespace}
*/
var ns = {};
ns.filledBy = require( '@stdlib/array-base-filled-by' );
ns.isArray = require( '@stdlib/assert-is-array' );
ns.iterator2array = require( '@stdlib/array-from-iterator' );
ns.iterSawtoothWave = require( '@stdlib/simulate-iter-sawtooth-wave' );
ns.kebabcase = require( '@stdlib/string-kebabcase' );
ns.lowercase = require( '@stdlib/string-lowercase' );
ns.map2d = require( '@stdlib/utils-map2d' );
ns.mt19937 = require( '@stdlib/random-base-mt19937' );
ns.naryFunction = require( '@stdlib/utils-nary-function' );
ns.zeta = require( '@stdlib/math-base-special-riemann-zeta' );


// EXPORTS //

module.exports = ns;

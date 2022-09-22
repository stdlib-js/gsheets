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

/* eslint-disable node/no-unpublished-require, stdlib/require-order */

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

ns.ANSCOMBES_QUARTET = require( '@stdlib/datasets-anscombes-quartet' );

ns.bartlettTest = require( '@stdlib/stats-bartlett-test' );
ns.blas = {};
ns.blas.daxpy = require( '@stdlib/blas-base-gaxpy' ).ndarray;
ns.blas.saxpy = require( '@stdlib/blas-base-gaxpy' ).ndarray;

ns.cumax = require( '@stdlib/stats-base-cumax' ).ndarray;

ns.filledBy = require( '@stdlib/array-base-filled-by' );
ns.flattenArray = require( './flatten2d.js' );
ns.format = require( '@stdlib/string-format' );

ns.hasSingletonDimension = require( './has_singleton_dimension.js' );

ns.isArray = require( '@stdlib/assert-is-array' );
ns.isInteger = require( '@stdlib/assert-is-integer' ).isPrimitive;
ns.isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
ns.isNonNegativeNumber = require( '@stdlib/assert-is-nonnegative-number' ).isPrimitive;
ns.isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
ns.isPositiveInteger = require( '@stdlib/assert-is-positive-integer' ).isPrimitive;
ns.isString = require( '@stdlib/assert-is-string' ).isPrimitive;

ns.iterator2array = require( '@stdlib/array-from-iterator' );
ns.iterSawtoothWave = require( '@stdlib/simulate-iter-sawtooth-wave' );

ns.kebabcase = require( '@stdlib/string-kebabcase' ); // TODO: replace with base version

ns.lowercase = require( '@stdlib/string-lowercase' ); // TODO: replace with base version

ns.map2d = require( './map2d.js' );

ns.random = {};
ns.random.minstd = require( '@stdlib/random-base-minstd' );
ns.random.minstdShuffle = require( '@stdlib/random-base-minstd-shuffle' );
ns.random.mt19937 = require( '@stdlib/random-base-mt19937' );
ns.random.normal = require( '@stdlib/random-base-normal' );
ns.random.uniform = require( '@stdlib/random-base-uniform' );

ns.zeta = require( '@stdlib/math-base-special-riemann-zeta' );


// EXPORTS //

module.exports = ns;

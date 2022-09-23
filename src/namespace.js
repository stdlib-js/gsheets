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

/* eslint-disable node/no-unpublished-require, stdlib/require-order, no-underscore-dangle */

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
ns.flattenArray = require( './utils/flatten2d.js' );
ns.format = require( '@stdlib/string-format' );

ns.assert = {};
ns.assert.hasSingletonDimension = require( './assert/has_singleton_dimension.js' );
ns.assert.isDefined = require( './assert/is_defined.js' );
ns.assert.isInteger = require( './assert/is_integer.js' );
ns.assert.isNonNegativeInteger = require( './assert/is_nonnegative_integer.js' );
ns.assert.isNonNegativeNumber = require( './assert/is_nonnegative_number.js' );
ns.assert.isNumber = require( './assert/is_number.js' );
ns.assert.isOneOf = require( './assert/is_one_of.js' );
ns.assert.isPositiveInteger = require( './assert/is_positive_integer.js' );
ns.assert.isPositiveNumber = require( './assert/is_positive_number.js' );
ns.assert.isRange = require( './assert/is_range.js' );
ns.assert.isRange1d = require( './assert/is_range_1d.js' );
ns.assert.isString = require( './assert/is_string.js' );
ns.assert.unrecognizedOptionName = require( './assert/unrecognized_option_name.js' );
ns.assert.verifyPRNGSeed = require( './assert/verify_prng_seed.js' );

ns.iterator2array = require( '@stdlib/array-from-iterator' );
ns.iterSawtoothWave = require( '@stdlib/simulate-iter-sawtooth-wave' );

ns.kebabcase = require( '@stdlib/string-kebabcase' ); // TODO: replace with base version

ns.lowercase = require( '@stdlib/string-lowercase' ); // TODO: replace with base version

ns.map2d = require( './utils/map2d.js' );
ns.max = require( '@stdlib/stats-base-max' ).ndarray;
ns.mskmax = require( '@stdlib/stats-base-mskmax' ).ndarray;

ns.random = {};
ns.random.discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
ns.random.minstd = require( '@stdlib/random-base-minstd' ).factory;
ns.random.minstdShuffle = require( '@stdlib/random-base-minstd-shuffle' ).factory;
ns.random.mt19937 = require( '@stdlib/random-base-mt19937' ).factory;
ns.random.normal = require( '@stdlib/random-base-normal' ).factory;
ns.random.uniform = require( '@stdlib/random-base-uniform' ).factory;

ns.tools = {};
ns.tools.n_n = require( './utils/n_n.js' );
ns.tools.s_s = require( './utils/s_s.js' );

ns.zeta = require( '@stdlib/math-base-special-riemann-zeta' );


// EXPORTS //

module.exports = ns;

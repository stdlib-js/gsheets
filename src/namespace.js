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

ns.assert = {};
ns.assert.isBoolean = require( './assert/is_boolean.js' );
ns.assert.isBroadcastCompatible = require( './assert/is_broadcast_compatible.js' );
ns.assert.isBroadcastCompatibleWith = require( './assert/is_broadcast_compatible_with.js' );
ns.assert.isDefined = require( './assert/is_defined.js' );
ns.assert.isGreaterThan = require( './assert/is_greater_than.js' );
ns.assert.isGreaterThanEqual = require( './assert/is_greater_than_equal.js' );
ns.assert.isInteger = require( './assert/is_integer.js' );
ns.assert.isLessThan = require( './assert/is_less_than.js' );
ns.assert.isLessThanEqual = require( './assert/is_less_than_equal.js' );
ns.assert.isNonNegativeInteger = require( './assert/is_nonnegative_integer.js' );
ns.assert.isNonNegativeNumber = require( './assert/is_nonnegative_number.js' );
ns.assert.isNumber = require( './assert/is_number.js' );
ns.assert.isOneOf = require( './assert/is_one_of.js' );
ns.assert.isPositiveInteger = require( './assert/is_positive_integer.js' );
ns.assert.isPositiveNumber = require( './assert/is_positive_number.js' );
ns.assert.isProbability = require( './assert/is_probability.js' );
ns.assert.isRange = require( './assert/is_range.js' );
ns.assert.isRange1d = require( './assert/is_range_1d.js' );
ns.assert.isSameShape = require( './assert/is_same_shape.js' );
ns.assert.isString = require( './assert/is_string.js' );
ns.assert.unrecognizedOptionName = require( './assert/unrecognized_option_name.js' );
ns.assert.verifyCommonPRNGArgs = require( './assert/verify_common_prng_args.js' );
ns.assert.verifyPRNGSeed = require( './assert/verify_prng_seed.js' );

ns.bartlettTest = require( '@stdlib/stats-bartlett-test' );

ns.blas = {};
ns.blas.daxpy = require( '@stdlib/blas-base-gaxpy' ).ndarray;
ns.blas.saxpy = require( '@stdlib/blas-base-gaxpy' ).ndarray;

ns.broadcast = require( './utils/broadcast.js' );

ns.camelcase = require( '@stdlib/string-camelcase' ); // TODO: replace with base version
ns.capitalize = require( '@stdlib/string-capitalize' ); // TODO: replace with base version
ns.constantcase = require( '@stdlib/string-constantcase' ); // TODO: replace with base version
ns.cumax = require( '@stdlib/stats-base-cumax' ).ndarray;

ns.dists = {};
ns.dists.normal = {};
ns.dists.normal.pdf = require( '@stdlib/stats-base-dists-normal-pdf' );

ns.filled = require( './utils/filled2d.js' );
ns.filledBy = require( './utils/filledby2d.js' );
ns.flattenArray = require( './utils/flatten2d.js' );
ns.format = require( '@stdlib/string-format' );

ns.isArray = require( '@stdlib/assert-is-array' );
ns.isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
ns.isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
ns.isPositiveNumber = require( '@stdlib/assert-is-positive-number' ).isPrimitive;
ns.isRange1d = require( './assert/base/is_range_1d.js' );
ns.isString = require( '@stdlib/assert-is-string' ).isPrimitive;
ns.iterator2array = require( '@stdlib/array-from-iterator' );
ns.iterSawtoothWave = require( '@stdlib/simulate-iter-sawtooth-wave' );

ns.kebabcase = require( '@stdlib/string-kebabcase' ); // TODO: replace with base version

ns.linspace = require( '@stdlib/array-linspace' );
ns.lowercase = require( '@stdlib/string-lowercase' ); // TODO: replace with base version

ns.map2d = require( './utils/map2d.js' );
ns.max = require( '@stdlib/stats-base-max' ).ndarray;
ns.mskmax = require( '@stdlib/stats-base-mskmax' ).ndarray;

ns.pascalcase = require( '@stdlib/string-pascalcase' ); // TODO: replace with base version

ns.random = {};
ns.random.arcsine = require( '@stdlib/random-base-arcsine' ).factory;
ns.random.bernoulli = require( '@stdlib/random-base-bernoulli' ).factory;
ns.random.beta = require( '@stdlib/random-base-beta' ).factory;
ns.random.betaprime = require( '@stdlib/random-base-betaprime' ).factory;
ns.random.binomial = require( '@stdlib/random-base-binomial' ).factory;
ns.random.boxMueller = require( '@stdlib/random-base-box-muller' ).factory;
ns.random.cauchy = require( '@stdlib/random-base-cauchy' ).factory;
ns.random.chi = require( '@stdlib/random-base-chi' ).factory;
ns.random.chisquare = require( '@stdlib/random-base-chisquare' ).factory;
ns.random.cosine = require( '@stdlib/random-base-cosine' ).factory;
ns.random.discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
ns.random.erlang = require( '@stdlib/random-base-erlang' ).factory;
ns.random.exponential = require( '@stdlib/random-base-exponential' ).factory;
ns.random.f = require( '@stdlib/random-base-f' ).factory;
ns.random.frechet = require( '@stdlib/random-base-frechet' ).factory;

ns.random.gamma = require( '@stdlib/random-base-gamma' ).factory;
ns.random.geometric = require( '@stdlib/random-base-geometric' ).factory;
ns.random.gumbel = require( '@stdlib/random-base-gumbel' ).factory;
ns.random.hypergeometric = require( '@stdlib/random-base-hypergeometric' ).factory;
ns.random.improvedZiggurat = require( '@stdlib/random-base-improved-ziggurat' ).factory;
ns.random.invgamma = require( '@stdlib/random-base-invgamma' ).factory;
ns.random.kumaraswamy = require( '@stdlib/random-base-kumaraswamy' ).factory;
ns.random.laplace = require( '@stdlib/random-base-laplace' ).factory;
ns.random.levy = require( '@stdlib/random-base-levy' ).factory;
ns.random.logistic = require( '@stdlib/random-base-logistic' ).factory;
ns.random.lognormal = require( '@stdlib/random-base-lognormal' ).factory;

ns.random.minstd = require( '@stdlib/random-base-minstd' ).factory;
ns.random.minstdShuffle = require( '@stdlib/random-base-minstd-shuffle' ).factory;
ns.random.mt19937 = require( '@stdlib/random-base-mt19937' ).factory;

ns.random.negativeBinomial = require( '@stdlib/random-base-negative-binomial' ).factory;

ns.random.normal = require( '@stdlib/random-base-normal' ).factory;
ns.random.paretoType1 = require( '@stdlib/random-base-pareto-type1' ).factory;
ns.random.poisson = require( '@stdlib/random-base-poisson' ).factory;
ns.random.rayleigh = require( '@stdlib/random-base-rayleigh' ).factory;
ns.random.t = require( '@stdlib/random-base-t' ).factory;
ns.random.triangular = require( '@stdlib/random-base-triangular' ).factory;

ns.random.uniform = require( '@stdlib/random-base-uniform' ).factory;

ns.random.weibull = require( '@stdlib/random-base-weibull' ).factory;

ns.snakecase = require( '@stdlib/string-snakecase' ); // TODO: replace with base version
ns.startcase = require( '@stdlib/string-startcase' ); // TODO: replace with base version

ns.tools = {};
ns.tools.binary2d = require( './utils/binary2d.js' );
ns.tools.d_d = require( './utils/d_d.js' );
ns.tools.dd_d = require( './utils/dd_d.js' );
ns.tools.ddd_d = require( './utils/ddd_d.js' );
ns.tools.s_o = require( './utils/s_o.js' );
ns.tools.ss_o = require( './utils/ss_o.js' );
ns.tools.sss_o = require( './utils/sss_o.js' );
ns.tools.ternary2d = require( './utils/ternary2d.js' );
ns.tools.unary2d = require( './utils/unary2d.js' );

ns.uncapitalize = require( '@stdlib/string-uncapitalize' ); // TODO: replace with base version
ns.uppercase = require( '@stdlib/string-uppercase' ); // TODO: replace with base version

ns.zeta = require( '@stdlib/math-base-special-riemann-zeta' );


// EXPORTS //

module.exports = ns;

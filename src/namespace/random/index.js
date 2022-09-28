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

/* eslint-disable node/no-unpublished-require */

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
ns.arcsine = require( '@stdlib/random-base-arcsine' ).factory;
ns.bernoulli = require( '@stdlib/random-base-bernoulli' ).factory;
ns.beta = require( '@stdlib/random-base-beta' ).factory;
ns.betaprime = require( '@stdlib/random-base-betaprime' ).factory;
ns.binomial = require( '@stdlib/random-base-binomial' ).factory;
ns.boxMueller = require( '@stdlib/random-base-box-muller' ).factory;
ns.cauchy = require( '@stdlib/random-base-cauchy' ).factory;
ns.chi = require( '@stdlib/random-base-chi' ).factory;
ns.chisquare = require( '@stdlib/random-base-chisquare' ).factory;
ns.cosine = require( '@stdlib/random-base-cosine' ).factory;
ns.discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
ns.erlang = require( '@stdlib/random-base-erlang' ).factory;
ns.exponential = require( '@stdlib/random-base-exponential' ).factory;
ns.f = require( '@stdlib/random-base-f' ).factory;
ns.frechet = require( '@stdlib/random-base-frechet' ).factory;

ns.gamma = require( '@stdlib/random-base-gamma' ).factory;
ns.geometric = require( '@stdlib/random-base-geometric' ).factory;
ns.gumbel = require( '@stdlib/random-base-gumbel' ).factory;
ns.hypergeometric = require( '@stdlib/random-base-hypergeometric' ).factory;
ns.improvedZiggurat = require( '@stdlib/random-base-improved-ziggurat' ).factory;
ns.invgamma = require( '@stdlib/random-base-invgamma' ).factory;
ns.kumaraswamy = require( '@stdlib/random-base-kumaraswamy' ).factory;
ns.laplace = require( '@stdlib/random-base-laplace' ).factory;
ns.levy = require( '@stdlib/random-base-levy' ).factory;
ns.logistic = require( '@stdlib/random-base-logistic' ).factory;
ns.lognormal = require( '@stdlib/random-base-lognormal' ).factory;

ns.minstd = require( '@stdlib/random-base-minstd' ).factory;
ns.minstdShuffle = require( '@stdlib/random-base-minstd-shuffle' ).factory;
ns.mt19937 = require( '@stdlib/random-base-mt19937' ).factory;

ns.negativeBinomial = require( '@stdlib/random-base-negative-binomial' ).factory;

ns.normal = require( '@stdlib/random-base-normal' ).factory;
ns.paretoType1 = require( '@stdlib/random-base-pareto-type1' ).factory;
ns.poisson = require( '@stdlib/random-base-poisson' ).factory;
ns.rayleigh = require( '@stdlib/random-base-rayleigh' ).factory;
ns.t = require( '@stdlib/random-base-t' ).factory;
ns.triangular = require( '@stdlib/random-base-triangular' ).factory;

ns.uniform = require( '@stdlib/random-base-uniform' ).factory;

ns.weibull = require( '@stdlib/random-base-weibull' ).factory;


// EXPORTS //

module.exports = ns;

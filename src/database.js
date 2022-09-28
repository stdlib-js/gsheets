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

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'anscombes_quartet',
	'pkg': '@stdlib/datasets/anscombes-quartet',
	'related': []
});

ns.push({
	'alias': 'bartlett_test',
	'pkg': '@stdlib/stats/bartlett-test',
	'related': []
});

ns.push({
	'alias': 'blas_daxpy',
	'pkg': '@stdlib/blas/base/gaxpy',
	'related': [
		'blas_saxpy'
	]
});

ns.push({
	'alias': 'blas_saxpy',
	'pkg': '@stdlib/blas/base/gaxpy',
	'related': [
		'blas_daxpy'
	]
});

ns.push({
	'alias': 'camelcase',
	'pkg': '@stdlib/string/camelcase',
	'related': [
		'constantcase',
		'kebabcase',
		'lowercase',
		'pascalcase',
		'snakecase',
		'startcase',
		'uppercase'
	]
});

ns.push({
	'alias': 'capitalize',
	'pkg': '@stdlib/string/capitalize',
	'related': [
		'uncapitalize',
		'uppercase'
	]
});

ns.push({
	'alias': 'constantcase',
	'pkg': '@stdlib/string/constantcase',
	'related': [
		'camelcase',
		'kebabcase',
		'lowercase',
		'pascalcase',
		'snakecase',
		'startcase',
		'uppercase'
	]
});

ns.push({
	'alias': 'cumax',
	'pkg': '@stdlib/stats/base/cumax',
	'related': [
		'max'
	]
});

ns.push({
	'alias': 'dists_normal_pdf',
	'pkg': '@stdlib/stats/base/dists/normal/pdf',
	'related': []
});

ns.push({
	'alias': 'full',
	'pkg': '@stdlib/array/full',
	'related': [
		'ones',
		'zeros'
	]
});

ns.push({
	'alias': 'kebabcase',
	'pkg': '@stdlib/string/kebabcase',
	'related': [
		'camelcase',
		'constantcase',
		'lowercase',
		'pascalcase',
		'snakecase',
		'startcase',
		'uppercase'
	]
});

ns.push({
	'alias': 'linspace',
	'pkg': '@stdlib/array/linspace',
	'related': []
});

ns.push({
	'alias': 'lowercase',
	'pkg': '@stdlib/string/lowercase',
	'related': [
		'uncapitalize',
		'uppercase'
	]
});

ns.push({
	'alias': 'max',
	'pkg': '@stdlib/stats/base/max',
	'related': [
		'cumax',
		'mskmax'
	]
});

ns.push({
	'alias': 'mskmax',
	'pkg': '@stdlib/stats/base/mskmax',
	'related': [
		'cumax',
		'max'
	]
});

ns.push({
	'alias': 'ones',
	'pkg': '@stdlib/array/ones',
	'related': [
		'full',
		'zeros'
	]
});

ns.push({
	'alias': 'pascalcase',
	'pkg': '@stdlib/string/pascalcase',
	'related': [
		'camelcase',
		'constantcase',
		'lowercase',
		'kebabcase',
		'snakecase',
		'startcase',
		'uppercase'
	]
});

ns.push({
	'alias': 'random_arcsine',
	'pkg': '@stdlib/random/base/arcsine',
	'related': []
});

ns.push({
	'alias': 'random_bernoulli',
	'pkg': '@stdlib/random/base/bernoulli',
	'related': []
});

ns.push({
	'alias': 'random_beta',
	'pkg': '@stdlib/random/base/beta',
	'related': []
});

ns.push({
	'alias': 'random_betaprime',
	'pkg': '@stdlib/random/base/betaprime',
	'related': []
});

ns.push({
	'alias': 'random_binomial',
	'pkg': '@stdlib/random/base/binomial',
	'related': []
});

ns.push({
	'alias': 'random_box_muller',
	'pkg': '@stdlib/random/base/box-muller',
	'related': []
});

ns.push({
	'alias': 'random_cauchy',
	'pkg': '@stdlib/random/base/cauchy',
	'related': []
});

ns.push({
	'alias': 'random_chi',
	'pkg': '@stdlib/random/base/chi',
	'related': []
});

ns.push({
	'alias': 'random_chisquare',
	'pkg': '@stdlib/random/base/chisquare',
	'related': []
});

ns.push({
	'alias': 'random_cosine',
	'pkg': '@stdlib/random/base/cosine',
	'related': []
});

ns.push({
	'alias': 'random_discrete_uniform',
	'pkg': '@stdlib/random/base/discrete-uniform',
	'related': [
		'random_uniform'
	]
});

ns.push({
	'alias': 'random_erlang',
	'pkg': '@stdlib/random/base/erlang',
	'related': []
});

ns.push({
	'alias': 'random_exponential',
	'pkg': '@stdlib/random/base/exponential',
	'related': []
});

ns.push({
	'alias': 'random_f',
	'pkg': '@stdlib/random/base/f',
	'related': []
});

ns.push({
	'alias': 'random_frechet',
	'pkg': '@stdlib/random/base/frechet',
	'related': []
});

ns.push({
	'alias': 'random_minstd',
	'pkg': '@stdlib/random/base/minstd',
	'related': [
		'random_minstd_shuffle',
		'random_mt19937'
	]
});

ns.push({
	'alias': 'random_minstd_shuffle',
	'pkg': '@stdlib/random/base/minstd-shuffle',
	'related': [
		'random_minstd',
		'random_mt19937'
	]
});

ns.push({
	'alias': 'random_mt19937',
	'pkg': '@stdlib/random/base/mt19937',
	'related': [
		'random_minstd',
		'random_minstd_shuffle'
	]
});

ns.push({
	'alias': 'random_normal',
	'pkg': '@stdlib/random/base/normal',
	'related': [
		'random_box_muller'
	]
});

ns.push({
	'alias': 'random_uniform',
	'pkg': '@stdlib/random/base/uniform',
	'related': [
		'random_discrete_uniform'
	]
});

ns.push({
	'alias': 'sawtooth_wave',
	'pkg': '@stdlib/simulate/iter/sawtooth-wave',
	'related': []
});

ns.push({
	'alias': 'snakecase',
	'pkg': '@stdlib/string/snakecase',
	'related': [
		'camelcase',
		'constantcase',
		'lowercase',
		'kebabcase',
		'pascalcase',
		'startcase',
		'uppercase'
	]
});

ns.push({
	'alias': 'startcase',
	'pkg': '@stdlib/string/startcase',
	'related': [
		'camelcase',
		'constantcase',
		'lowercase',
		'kebabcase',
		'pascalcase',
		'snakecase',
		'uppercase'
	]
});

ns.push({
	'alias': 'uncapitalize',
	'pkg': '@stdlib/string/uncapitalize',
	'related': [
		'capitalize',
		'lowercase'
	]
});

ns.push({
	'alias': 'uppercase',
	'pkg': '@stdlib/string/uppercase',
	'related': [
		'capitalize',
		'lowercase'
	]
});

ns.push({
	'alias': 'zeros',
	'pkg': '@stdlib/array/zeros',
	'related': [
		'full',
		'ones'
	]
});

ns.push({
	'alias': 'zeta',
	'pkg': '@stdlib/math/base/special/riemann-zeta',
	'related': []
});


// EXPORTS //

module.exports = ns;

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

ns.normal = {};
ns.normal.cdf = require( '@stdlib/stats-base-dists-normal-cdf' );
ns.normal.entropy = require( '@stdlib/stats-base-dists-normal-entropy' );
ns.normal.kurtosis = require( '@stdlib/stats-base-dists-normal-kurtosis' );
ns.normal.logcdf = require( '@stdlib/stats-base-dists-normal-logcdf' );
ns.normal.logpdf = require( '@stdlib/stats-base-dists-normal-logpdf' );
ns.normal.mean = require( '@stdlib/stats-base-dists-normal-mean' );
ns.normal.median = require( '@stdlib/stats-base-dists-normal-median' );
ns.normal.mgf = require( '@stdlib/stats-base-dists-normal-mgf' );
ns.normal.mode = require( '@stdlib/stats-base-dists-normal-mode' );
ns.normal.pdf = require( '@stdlib/stats-base-dists-normal-pdf' );
ns.normal.quantile = require( '@stdlib/stats-base-dists-normal-quantile' );
ns.normal.skewness = require( '@stdlib/stats-base-dists-normal-skewness' );
ns.normal.stdev = require( '@stdlib/stats-base-dists-normal-stdev' );
ns.normal.variance = require( '@stdlib/stats-base-dists-normal-variance' );


// EXPORTS //

module.exports = ns;

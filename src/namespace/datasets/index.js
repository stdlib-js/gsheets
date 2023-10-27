/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

ns.AFINN_111 = require( '@stdlib/datasets-afinn-111' );
ns.AFINN_96 = require( '@stdlib/datasets-afinn-96' );
ns.ANSCOMBES_QUARTET = require( '@stdlib/datasets-anscombes-quartet' );
ns.HERNDON_VENUS_SEMIDIAMETERS = require( '@stdlib/datasets-herndon-venus-semidiameters' );
ns.NIGHTINGALES_ROSE = require( '@stdlib/datasets-nightingales-rose' );


// EXPORTS //

module.exports = ns;

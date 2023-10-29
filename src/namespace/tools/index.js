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
ns.bbinary2d = require( '@stdlib/array-base-broadcasted-binary2d' );
ns.d_d = require( '@stdlib/gsheets/math/tools/wrap-unary' );
ns.dd_d = require( '@stdlib/gsheets/math/tools/wrap-binary' );
ns.ddd_d = require( '@stdlib/gsheets/math/tools/wrap-ternary' );
ns.dddd_d = require( '@stdlib/gsheets/math/tools/wrap-quaternary' );
ns.ddddd_d = require( '@stdlib/gsheets/math/tools/wrap-quinary' );
ns.s_o = require( '@stdlib/gsheets/string/tools/wrap-unary' );
ns.ss_o = require( '@stdlib/gsheets/string/tools/wrap-binary' );
ns.sss_o = require( '@stdlib/gsheets/string/tools/wrap-ternary' );
ns.unary2d = require( '@stdlib/array-base-unary2d' );


// EXPORTS //

module.exports = ns;

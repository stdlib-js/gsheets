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

// MODULES //

var copy = require( './copy.js' );


// VARIABLES //

var tmp;


// MAIN //

/**
* Application namespace.
*
* @name ns
* @constant
* @type {Namespace}
*/
var ns = {};

ns.bartlettTest = require( '@stdlib/stats-bartlett-test' );
ns.broadcast = require( './../utils/broadcast.js' );

ns.cumax = require( '@stdlib/stats-base-cumax' ).ndarray;

ns.filled = require( './../utils/filled.js' );
ns.filledBy = require( './../utils/filled_by.js' );
ns.flattenArray = require( './../utils/flatten2d.js' );

ns.filled2d = require( '@stdlib/array-base-filled2d' );
ns.ones2d = require( '@stdlib/array-base-ones2d' );
ns.zeros2d = require( '@stdlib/array-base-zeros2d' );

ns.isArray = require( '@stdlib/assert-is-array' );
ns.isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
ns.isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
ns.isPositiveNumber = require( '@stdlib/assert-is-positive-number' ).isPrimitive;
ns.isString = require( '@stdlib/assert-is-string' ).isPrimitive;
ns.iterator2array = require( '@stdlib/array-from-iterator' );
ns.iterSawtoothWave = require( '@stdlib/simulate-iter-sawtooth-wave' );

ns.linspace = require( '@stdlib/array-linspace' );

ns.max = require( '@stdlib/stats-base-max' ).ndarray;
ns.mskmax = require( '@stdlib/stats-base-mskmax' ).ndarray;

ns.assert = {};
tmp = require( './assert' );
copy( tmp, ns.assert );

ns.blas = {};
tmp = require( './blas' );
copy( tmp, ns.blas );

tmp = require( './d_d' );
copy( tmp, ns );

tmp = require( './datasets' );
copy( tmp, ns );

ns.dists = {};
tmp = require( './dists' );
copy( tmp, ns.dists );

tmp = require( './s_o' );
copy( tmp, ns );

ns.random = {};
tmp = require( './random' );
copy( tmp, ns.random );

ns.tools = {};
tmp = require( './tools' );
copy( tmp, ns.tools );


// EXPORTS //

module.exports = ns;

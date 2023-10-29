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
* This file contains all functions which should be exposed to APIs made public in `Code.gs`.
*/

/* eslint-disable node/no-unpublished-require */

'use strict';

// MODULES //

var copy = require( '@stdlib/gsheets/object/shallow-copy' );


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
ns.broadcastShapes = require( '@stdlib/ndarray-base-broadcast-shapes' );

ns.cumax = require( '@stdlib/stats-base-cumax' ).ndarray;

ns.filled2d = require( '@stdlib/array-base-filled2d' );
ns.filled2dBy = require( '@stdlib/array-base-filled2d-by' );
ns.flattenArray = require( '@stdlib/gsheets/array/flatten2d' );

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

ns.normalizeBroadcastArgs = require( '@stdlib/gsheets/array/normalize-broadcast-args' );

ns.ones2d = require( '@stdlib/array-base-ones2d' );

ns.zeros2d = require( '@stdlib/array-base-zeros2d' );

ns.assert = require( './assert' );
ns.blas = require( './blas' );
ns.datasets = require( './datasets' );
ns.dists = require( './dists' );
ns.math = require( './math' );
ns.random = require( './random' );
ns.string = require( './string' );
ns.tools = require( './tools' );

tmp = require( './d_d' );
copy( tmp, ns );

tmp = require( './dd_d' );
copy( tmp, ns );

tmp = require( './s_o' );
copy( tmp, ns );


// EXPORTS //

module.exports = ns;

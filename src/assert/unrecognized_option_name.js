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

// MODULES //

var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Throws an error due to an unrecognized option name.
*
* @private
* @param {string} name - option name
* @throws {Error} must provide recognized option name
*/
function assert( name ) {
	throw new Error( format( 'invalid argument. Unrecognized option name. Value: %s.', String( name ) ) );
}


// EXPORTS //

module.exports = assert;

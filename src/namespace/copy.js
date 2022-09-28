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

var objectKeys = require( '@stdlib/utils-keys' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Shallow copies the properties from a source object to a destination object.
*
* @private
* @param {Object} src - source object
* @param {Object} dest - destination object
* @throws {Error} property already exists
* @returns {Object} destination object
*/
function copy( src, dest ) {
	var keys;
	var k;
	var i;

	keys = objectKeys( src );
	for ( i = 0; i < keys.length; i++ ) {
		k = keys[ i ];
		if ( hasOwnProp( dest, k ) ) {
			throw new Error( format( 'unexpected error. Property already exists on destination object. Property: %s.', k ) );
		}
		dest[ k ] = src[ k ];
	}
	return dest;
}


// EXPORTS //

module.exports = copy;
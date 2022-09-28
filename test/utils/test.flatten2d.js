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

var tape = require( 'tape' );
var flatten2d = require( './../../src/utils/flatten2d.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof flatten2d, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function flattens a nested array of arrays', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = [ [] ];
	expected = [];
	actual = flatten2d( arr );
	t.deepEqual( actual, expected, 'returns expected value' );

	arr = [ [ 1, 2 ] ];
	expected = [ 1, 2 ];
	actual = flatten2d( arr );
	t.deepEqual( actual, expected, 'returns expected value' );

	arr = [ [ 1, 2 ], [ 3, 4 ] ];
	expected = [ 1, 2, 3, 4 ];
	actual = flatten2d( arr );
	t.deepEqual( actual, expected, 'returns expected value' );

	arr = [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ];
	expected = [ 1, 2, 3, 4, 5, 6 ];
	actual = flatten2d( arr );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
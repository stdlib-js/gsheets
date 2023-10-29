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

'use strict';

// MODULES //

var tape = require( 'tape' );
var ref = require( '@stdlib/string-capitalize' );
var isArray = require( '@stdlib/assert-is-array' );
var flatten2d = require( '@stdlib/gsheets/array/flatten2d' );
var capitalize = require( './../../../../src/api/generated/capitalize.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof capitalize, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string (primitive)', function test( t ) {
	var values;
	var i;

	values = [
		1,
		3.14,
		true,
		false
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			capitalize( value );
		}
	}
});

tape( 'the function throws an error if not provided a string (nested array)', function test( t ) {
	var values;
	var i;

	values = [
		1,
		3.14,
		true,
		false
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			capitalize( [ [ value ] ] );
		}
	}
});

tape( 'the function capitalizes the first character of a string (primitive)', function test( t ) {
	var expected;
	var actual;
	var values;
	var v;
	var i;

	values = [ 'foo bar', 'Foo Bar', 'foo_bar', 'fooBar' ];

	for ( i = 0; i < values.length; i++ ) {
		v = values[ i ];
		actual = capitalize( v );
		expected = ref( v );
		t.strictEqual( actual, expected, 'returns expected value when provided '+v );
	}
	t.end();
});

tape( 'the function capitalizes the first character of a string (nested array)', function test( t ) {
	var expected;
	var actual;
	var values;
	var arr;
	var tmp;
	var v;
	var i;
	var j;

	values = [ 'foo bar', 'Foo Bar', 'foo_bar', 'fooBar' ];

	arr = [];
	expected = [];
	for ( i = 0; i < 10; i++ ) {
		tmp = [];
		for ( j = 0; j < 10; j++ ) {
			v = values[ j%values.length ];
			tmp.push( v );
			expected.push( ref( v ) );
		}
		arr.push( tmp );
	}
	actual = capitalize( arr );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( isArray( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( flatten2d( actual ), expected, 'returns expected value' );
	t.end();
});

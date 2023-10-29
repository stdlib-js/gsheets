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
var ref = require( '@stdlib/math-base-special-abs2' );
var isArray = require( '@stdlib/assert-is-array' );
var uniform = require( '@stdlib/random-base-uniform' ).factory;
var flatten2d = require( '@stdlib/gsheets/array/flatten2d' );
var abs2 = require( './../../../../src/api/math/generated/abs2.js' );


// VARIABLES //

var rand = uniform( -10.0, 10.0 );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof abs2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a number (primitive)', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		true,
		false
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			abs2( value );
		}
	}
});

tape( 'the function throws an error if not provided a number (nested array)', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		true,
		false
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			abs2( [ [ value ] ] );
		}
	}
});

tape( 'the function computes the squared absolute value (primitive)', function test( t ) {
	var expected;
	var actual;
	var v;
	var i;

	for ( i = 0; i < 10; i++ ) {
		v = rand();
		actual = abs2( v );
		expected = ref( v );
		t.strictEqual( actual, expected, 'returns expected value when provided '+v );
	}
	t.end();
});

tape( 'the function computes the squared absolute value (nested array)', function test( t ) {
	var expected;
	var actual;
	var arr;
	var tmp;
	var v;
	var i;
	var j;

	arr = [];
	expected = [];
	for ( i = 0; i < 10; i++ ) {
		tmp = [];
		for ( j = 0; j < 10; j++ ) {
			v = rand();
			tmp.push( v );
			expected.push( ref( v ) );
		}
		arr.push( tmp );
	}
	actual = abs2( arr );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( isArray( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( flatten2d( actual ), expected, 'returns expected value' );
	t.end();
});

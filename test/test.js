/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	prod = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-prod', function tests() {

	it( 'should export a function', function test() {
		expect( prod ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a non-array', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				prod( value );
			};
		}
	});

	it( 'should throw an error if provided an accessor which is not a function', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				prod( [1,2,3,4], value );
			};
		}
	});

	it( 'should return null if provided an empty array', function test() {
		assert.isNull( prod( [] ) );
	});

	it( 'should compute the product', function test() {
		var data, expected;

		data = [ 2, 4, 5, 3, 8, 2 ];
		expected = 1920;

		assert.strictEqual( prod( data ), expected );
	});

	it( 'should compute the product using an accessor function', function test() {
		var data, expected;

		data = [
			{'x':2},
			{'x':4},
			{'x':5},
			{'x':3},
			{'x':8},
			{'x':2}
		];
		expected = 1920;

		assert.strictEqual( prod( data, getValue ), expected );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should return 0 upon encountering a zero value', function test() {
		var data, expected;

		data = [ 2, 4, 0, 3, 8, 2 ];
		expected = 0;

		assert.strictEqual( prod( data ), expected );

		data = [
			{'x':1},
			{'x':0},
			{'x':2}
		];
		expected = 0;

		assert.strictEqual( prod( data, getValue ), expected );

		function getValue( d ) {
			return d.x;
		}
	});

});

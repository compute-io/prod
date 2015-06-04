/* global require, describe, it */
'use strict';

// MODULES //

var matrix = require( 'compute-matrix' );

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
			// '5',
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

	it( 'should throw an error if `options` is not an object', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				prod( [1,2,3,4,5], value );
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
				prod( [1,2,3,4,5], {'accessor': value} );
			};
		}
	});

	it( 'should throw an error if provided a dim option which is not a positive integer', function test() {
		var data = matrix( new Int32Array([1,2,3,4]), [2,2] );
		var values = [
			'5',
			-5,
			2.2,
			true,
			undefined,
			null,
			NaN,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( Error );
		}

		function badValue( value ) {
			return function() {
				prod( data, {'dim': value} );
			};
		}
	});

	it( 'should throw an error if provided a dim option which exceeds matrix dimensions ( = 2 )', function test() {
		var data = matrix( new Int32Array([1,2,3,4]), [2,2] );
		var values = [
			3,
			4,
			5
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( RangeError );
		}

		function badValue( value ) {
			return function() {
				prod( data, {'dim': value} );
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

		assert.strictEqual( prod( data, {'accessor': getValue} ), expected );

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

		assert.strictEqual( prod( data, {'accessor': getValue} ), expected );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should calculate the column products of a matrix', function test() {
		var data, expected, results;

		data = matrix( new Int32Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] ), [3,3] );
		expected = matrix( new Int32Array( [ 6, 120, 504 ] ), [3,1] );

		results = prod( data, {'dtype': 'int32'} );

		assert.strictEqual( results.data.length, expected.data.length );
		assert.deepEqual( results.data, expected.data );
	});

	it( 'should calculate the row products of a matrix', function test() {
		var data, expected, results;

		data = matrix( new Int32Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] ), [3,3] );
		expected = matrix( new Int32Array( [ 28, 80, 162 ] ), [1, 3] );

		results = prod( data, {'dim': 1, 'dtype': 'int32'} );

		assert.strictEqual( results.data.length, expected.data.length );
		assert.deepEqual( results.data, expected.data );
	});

});

/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Matrix data structure:
	matrix = require( 'dstructs-matrix' ),

	// Module to be tested:
	prod = require( './../lib/matrix.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'matrix product', function tests() {
	var data,
		mat,
		i;

	data = new Int8Array( 9 );
	for ( i = 0; i < data.length; i++ ) {
		data[ i ] = i + 1;
	}
	mat = matrix( data, [3,3], 'int8' );

	it( 'should export a function', function test() {
		expect( prod ).to.be.a( 'function' );
	});

	it( 'should compute the product along matrix columns', function test() {
		var out, p, expected;

		out = matrix( [3,1], 'int32' );

		p = prod( out, mat );
		expected = '6;120;504';

		assert.strictEqual( p.toString(), expected );

		p = prod( out, mat, 2 );
		expected = '6;120;504';

		assert.strictEqual( p.toString(), expected );
	});

	it( 'should compute the product along matrix rows', function test() {
		var out, p, expected;

		out = matrix( [1,3], 'int32' );

		p = prod( out, mat, 1 );
		expected = '28,80,162';

		assert.strictEqual( p.toString(), expected );
	});

	it( 'should return 1 if provided a matrix having one or more zero dimensions', function test() {
		var out, mat;

		out = matrix( [0,0] );

		mat = matrix( [0,10] );
		assert.strictEqual( prod( out, mat ), 1 );

		mat = matrix( [10,0] );
		assert.strictEqual( prod( out, mat ), 1 );

		mat = matrix( [0,0] );
		assert.strictEqual( prod( out, mat ), 1 );
	});

});

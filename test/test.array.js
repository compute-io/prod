/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	prod = require( './../lib/array.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'array mean', function tests() {

	it( 'should export a function', function test() {
		expect( prod ).to.be.a( 'function' );
	});

	it( 'should compute the product', function test() {
		var data, expected;

		data = [ 2, 4, 5, 3, 8, 2 ];
		expected = 1920;

		assert.strictEqual( prod( data ), expected );
	});

	it( 'should return null if provided an empty array', function test() {
		assert.isNull( prod( [] ) );
	});

});

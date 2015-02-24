/**
*
*	COMPUTE: prod
*
*
*	DESCRIPTION:
*		- Computes the product of an array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Philipp Burckhardt.
*
*
*	AUTHOR:
*		Philipp Burckhardt. pburckhardt@outlook.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' );

// PROD //

/*
* FUNCTION: prod( arr[, accessor] )
*	Computes the product of an array.
*
* @param {Array} arr - array of values
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Number|Null} product
*/
function prod( arr, clbk ) {
	if ( !isArray( arr ) ) {
		throw new TypeError( 'prod()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}
	if ( arguments.length > 1 ) {
		if ( typeof clbk !== 'function' ) {
			throw new TypeError( 'prod()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
		}
	}
	var len = arr.length,
		p = 1,
		val,
		i;

	if ( !len ) {
		return null;
	}
	if ( clbk ) {
		for ( i = 0; i < len; i++ ) {
			val = clbk( arr[ i ] );
			if ( val === 0 ) {
				return 0;
			}
			p *= val;
		}
	} else {
		for ( i = 0; i < len; i++ ) {
			val = arr[ i ];
			if ( val === 0 ) {
				return 0;
			}
			p *= val;
		}
	}
	return p;
} // end FUNCTION prod()


// EXPORTS //

module.exports = prod;

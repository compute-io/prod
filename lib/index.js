/**
*
*	COMPUTE: prod
*
*
*	DESCRIPTION:
*		- Computes the product over an array of values.
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

// var module_alias = require( 'module_name' );


// FUNCTIONS //


/*
* FUNCTION: prod( arr )
*	Computes the product over an array of values.
*
* @param {Array} arr - array of values
* @returns {Number} prod
*/
function prod( arr ) {
  if ( !Array.isArray( arr ) ) {
    throw new TypeError( 'sum()::invalid input argument. Must provide an array.' );
  }
  var len = arr.length,
    p = 1;

  for ( var i = 0; i < len; i++ ) {
    p *= arr[ i ];
    if (p === 0){
      break;
    }
  }
  return p;
} // end FUNCTION prod()


// EXPORTS //

module.exports = prod;

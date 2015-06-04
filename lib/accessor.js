'use strict';

/**
* FUNCTION: prod( arr, clbk )
*	Computes the product of the elements of an array using an accessor.
*
* @param {Array} arr - input array
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Number|Null} product value
*/
function prod( arr, clbk ) {
	var len = arr.length,
		p = 1,
		i,
		val;

	if ( !len ) {
		return null;
	}

	for ( i = 0; i < len; i++ ) {
		val = clbk( arr[ i ], i );
		if ( val === 0 ) {
			return 0;
		}
		p *= val;
	}

	return p;
} // end FUNCTION prod()


// EXPORTS //

module.exports = prod;

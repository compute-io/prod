'use strict';

/**
* FUNCTION: prod( arr, clbk )
*	Computes an array product using an accessor.
*
* @param {Array} arr - input array
* @param {Function} accessor - accessor function for accessing array values
* @returns {Number} product
*/
function prod( arr, clbk ) {
	var len = arr.length,
		p = 1,
		v,
		i;
	for ( i = 0; i < len; i++ ) {
		v = clbk( arr[ i ], i );
		if ( v === 0 ) {
			return 0;
		}
		p *= v;
	}
	return p;
} // end FUNCTION prod()


// EXPORTS //

module.exports = prod;

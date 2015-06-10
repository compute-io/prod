'use strict';

/**
* FUNCTION: prod( arr )
*	Computes an array product.
*
* @param {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} arr - input array
* @returns {Number} product
*/
function prod( arr ) {
	var len = arr.length,
		p = 1,
		i;
	if ( !len ) {
		return 1;
	}
	for ( i = 0; i < len; i++ ) {
		if ( arr[ i ] === 0 ) {
			return 0;
		}
		p *= arr[ i ];
	}
	return p;
} // end FUNCTION prod()


// EXPORTS //

module.exports = prod;

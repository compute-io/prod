'use strict';

/**
* FUNCTION: prod( arr )
*	Computes the product over the elements of an array.
*
* @param {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} arr - input array
* @returns {Number|Null} product value
*/
function prod( arr ) {
	var len = arr.length,
		p = 1,
		i,
		val;

	if ( !len ) {
		return null;
	}

	for ( i = 0; i < len; i++ ) {
		val = arr[ i ];
		if ( val === 0 ) {
			return 0;
		}
		p *= val;
	}

	return p;
} // end FUNCTION prod()


// EXPORTS //

module.exports = prod;

'use strict';

/**
* FUNCTION: prod( out, mat[, dim] )
*	Computes the product along a matrix dimension.
*
* @param {Matrix} out - output matrix
* @param {Matrix} mat - input matrix
* @param {Number} [dim=2] - matrix dimension along which to compute the product. If `dim=1`, compute along matrix rows. If `dim=2`, compute along matrix columns.
* @returns {Matrix|Number} product or 1
*/
function prod( out, mat, dim ) {
	var p,
		M, N,
		s0, s1,
		o,
		i, j, k;

	if ( dim === 1 ) {
		// Compute along the rows...
		M = mat.shape[ 1 ];
		N = mat.shape[ 0 ];
		s0 = mat.strides[ 1 ];
		s1 = mat.strides[ 0 ];
	} else {
		// Compute along the columns...
		M = mat.shape[ 0 ];
		N = mat.shape[ 1 ];
		s0 = mat.strides[ 0 ];
		s1 = mat.strides[ 1 ];
	}
	if ( M === 0 || N === 0 ) {
		return 1;
	}
	o = mat.offset;
	for ( i = 0; i < M; i++ ) {
		k = o + i*s0;
		p = 1;
		for ( j = 0; j < N; j++ ) {
			p *= mat.data[ k + j*s1 ];
		}
		out.data[ i ] = p;
	}
	return out;
} // end FUNCTION prod()


// EXPORTS //

module.exports = prod;

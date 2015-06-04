'use strict';

var matrix = require( 'compute-matrix' ),
	prod = require( './../lib' );

var data,
	mat,
	p,
	i;

// ----
// Plain arrays...
var data = new Array( 100 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random() * 10 + 1 );
}
p = prod( data );
console.log( 'Arrays: %d\n', p );


// ----
// Object arrays (accessors)...
function getValue( d ) {
	return d.x;
}
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = {
		'x': data[ i ]
	};
}
p = prod( data, {
	'accessor': getValue
});
console.log( 'Accessors: %d\n', p );


// ----
// Typed arrays...
data = new Int32Array( 100 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random() * 10 + 1 );
}
p = prod( data );


// ----
// Matrices (along rows)...
mat = matrix( data, [10,10], 'int32' );
p = prod( mat, {
	'dim': 1
});
console.log( 'Matrix (rows): %s\n', p.toString() );


// ----
// Matrices (along columns)...
p = prod( mat, {
	'dim': 2
});
console.log( 'Matrix (columns): %s\n', p.toString() );


// ----
// Matrices (custom output data type)...
p = prod( mat, {
	'dtype': 'uint8'
});
console.log( 'Matrix (%s): %s\n', p.dtype, p.toString() );

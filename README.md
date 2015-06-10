Product
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the product.


## Installation

``` bash
$ npm install compute-prod
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).

## Usage

``` javascript
var prod = require( 'compute-prod' );
```

#### prod( x[, options] )

Computes the product of the elements in `x`. `x` may be either an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or [`matrix`](https://github.com/dstructs/matrix).

``` javascript
var data = [ 1, 2, 3, 4 ];

var p = prod( data );
// returns 24

data = new Int8Array( data );
p = prod( data );
// returns 24
```

For non-numeric `arrays`, provide an accessor `function` for accessing `array` values.

``` javascript
var arr = [
	{'x':1},
	{'x':2},
	{'x':3},
	{'x':4}
];

function getValue( d ) {
	return d.x;
}

var value = prod( arr, {
	'accessor': getValue
});
// returns 24
```

If provided a [`matrix`](https://github.com/dstructs/matrix), the function accepts the following `options`:

*	__dim__: dimension along which to compute the product. Default: `2` (along the columns).
*	__dtype__: output [`matrix`](https://github.com/dstructs/matrix) data type. Default: `float64`.

By default, the function computes the product along the columns (`dim=2`).

``` javascript
var matrix = require( 'dstructs-matrix' ),
	data,
	mat,
	p,
	i;

data = new Int8Array( 9 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = i + 1;
}
mat = matrix( data, [3,3], 'int8' );
/*
	[  1 2 3
	   4 5 6
	   7 8 9 ]
*/

p = prod( mat );
/*
	[  6
	   120
	   504 ]
*/
```

To compute the product along the rows, set the `dim` option to `1`.

``` javascript
p = prod( mat, {
	'dim': 1
});
/*
	[ 28 80 162 ]
*/
```

By default, the output [`matrix`](https://github.com/dstructs/matrix) data type is `float64`. To specify a different output data type, set the `dtype` option.

``` javascript
p = prod( mat, {
	'dim': 1,
	'dtype': 'uint8'
});
/*
	[ 28 80 162 ]
*/

var dtype = p.dtype;
// returns 'uint8'
```

If provided a [`matrix`](https://github.com/dstructs/matrix) having either dimension equal to `1`, the function treats the [`matrix`](https://github.com/dstructs/matrix) as a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) and returns a `numeric` value.

``` javascript
data = [ 2, 4, 5 ];

// Row vector:
mat = matrix( new Int8Array( data ), [1,3], 'int8' );
p = prod( mat );
// returns 40

// Column vector:
mat = matrix( new Int8Array( data ), [3,1], 'int8' );
p = prod( mat );
// returns 40
```

If provided an empty [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or [`matrix`](https://github.com/dstructs/matrix), the function returns `null`.

``` javascript
p = prod( [] );
// returns null

p = prod( new Int8Array( [] ) );
// returns null

p = prod( matrix( [0,0] ) );
// returns null

p = prod( matrix( [0,10] ) );
// returns null

p = prod( matrix( [10,0] ) );
// returns null
```


## Examples

``` javascript
var matrix = require( 'dstructs-matrix' ),
	prod = require( 'compute-prod' );

var data,
	mat,
	p,
	i;

// Plain arrays...
var data = new Array( 100 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random() * 10 + 1 );
}
p = prod( data );

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

// Typed arrays...
data = new Int32Array( 100 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random() * 10 + 1 );
}
p = prod( data );

// Matrices (along rows)...
mat = matrix( data, [10,10], 'int32' );
p = prod( mat, {
	'dim': 1
});

// Matrices (along columns)...
p = prod( mat, {
	'dim': 2
});

// Matrices (custom output data type)...
p = prod( mat, {
	'dtype': 'uint8'
});
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/compute-prod.svg
[npm-url]: https://npmjs.org/package/compute-prod

[travis-image]: http://img.shields.io/travis/compute-io/prod/master.svg
[travis-url]: https://travis-ci.org/compute-io/prod

[coveralls-image]: https://img.shields.io/coveralls/compute-io/prod/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/prod?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/prod.svg
[dependencies-url]: https://david-dm.org/compute-io/prod

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/prod.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/prod

[github-issues-image]: http://img.shields.io/github/issues/compute-io/prod.svg
[github-issues-url]: https://github.com/compute-io/prod/issues

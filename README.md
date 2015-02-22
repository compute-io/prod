prod
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the product over an array of values.


## Installation

``` bash
$ npm install compute-prod
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).

## Usage

To use the module,

``` javascript
var prod = require( 'compute-prod' );
```

## Examples

``` javascript
var prod = require( 'compute-prod' );

var data = new Array( 10 );

for ( var i = 0; i < data.length; i++ ) {
  data[ i ] = Math.round( Math.random() * 10 + 1 )  ;
}

data.sort( function sort( a, b ) {
  return a - b;
});

console.log( prod( data ) );
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

Copyright &copy; 2015. Philipp Burckhardt.


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

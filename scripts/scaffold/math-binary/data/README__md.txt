<!--

@license Apache-2.0

Copyright (c) {{YEAR}} {{COPYRIGHT}}.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

<!-- This is a generated file. Do not edit directly. -->

# {{ALIAS}}

> {{PKG_DESC}}.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var {{ALIAS}} = require( '@stdlib/gsheets/api/math/{{PKG_NAME}}' );
```

#### {{ALIAS}}( x, y\[, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue] )

{{DESC}}.

```javascript
var v = {{ALIAS}}( {{X_VALUES_1}}, {{Y_VALUES_1}} );
// returns {{EXPECTED_1}}

v = {{ALIAS}}( [ [ {{X_VALUES_1}} ] ], [ [ {{Y_VALUES_1}} ] ] );
// returns [ [ {{EXPECTED_1}} ] ]
```

The function accepts the following arguments:

-   **x**: input value. Must be either a number or a two-dimensional nested array of numbers.
-   **y**: input value. Must be either a number or a two-dimensional nested array of numbers.
-   **nonnumeric**: option name for specifying the value to return in place of raising an exception when an input value is not a number.
-   **nonnumericValue**: non-numeric option value.
-   **nan**: option name for specifying the value to return in place of `NaN`.
-   **nanValue**: `NaN` option value.
-   **pinf**: option name for specifying the value to return in place of positive infinity.
-   **pinfValue**: positive infinity option value.
-   **ninf**: option name for specifying the value to return in place of negative infinity.
-   **ninfValue**: negative infinity option value.

To specify sentinel values upon encountering non-numeric input values and/or when a return value is `NaN`, positive infinity, or negative infinity, provide the corresponding option-value arguments. For example, to replace a `NaN` return value with an empty string

```javascript
var v = {{ALIAS}}( [ [ NaN ] ], {{Y_VALUES_1}}, 'nan', '' );
// returns [ [ '' ] ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
{{PRNGS}}
var filled2dBy = require( '@stdlib/array-base-filled2d-by' );
var {{ALIAS}} = require( '@stdlib/gsheets/api/math/{{PKG_NAME}}' );

var shape = [ 3, 3 ];

var x = filled2dBy( shape, {{X_PRNG_ALIAS}}( {{X_RAND_MIN}}, {{X_RAND_MAX}} ) );
console.log( x );

var y = filled2dBy( shape, {{Y_PRNG_ALIAS}}( {{Y_RAND_MIN}}, {{Y_RAND_MAX}} ) );
console.log( y );

var z = {{ALIAS}}( x, y );
console.log( z );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->

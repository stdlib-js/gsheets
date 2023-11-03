# TODO

-   Use doctrine to transform JSDoc comments to a minimal version suitable to displaying help in Google sheets

    -   remove `@example` tags
    -   remove extended descriptions (only keep the first line)
    -   remove backticks from descriptions
    
-   add benchmarks

-   add unit tests
    
-   monetization strategy

    -   create an editor menu
    -   ability to display rendered help (as extracted from JSDoc Markdown comments)
    -   links to related functions
    -   function search
    -   examples
    -   tutorials (e.g., machine learning with sample datasets; could have option to load a tutorial template)
        -   another tutorial/offering could be "no code" analysis websites/dashboards
            -   sheets functions as a database with built-in analytic capabilities
            -   we can provide various templates that can then be converted into a web app via AppSheet
            -   those web apps can then be interactive, etc (e.g., cross filtering, pan/zoom, etc)
            -   Sheets effectively provides a platform for building serverless apps
                -   just by updating a single cell in a spreadsheet, on next load/refresh, the app is updated
    -   videos and educational materials
    -   product announcements (notifications in the menu when we've released new features)
    -   ability to submit maintenance and feature requests
    -   product support
    -   auto-migration functionality whenever we update APIs (e.g., rename `STDLIB_FOO` to `STDLIB_BAR`)
    -   the editor menu could be the paid product (user has to sign-up and login for help, search, tutorials, etc; this would also mean that functions could be used without paying, thus allowing sheets using stdlib functions to be sharable and still functional)
        -   we could add additional chart capabilities which understand, e.g., ndarrays, etc.
        
-   Can we prototype a quasi-jupyter/observable notebook in sheets?

    -   similar to a REPL, can enter commands in a vertical (or horizontal!) sequence
    -   when return ndarray, can specify to return "as" a row, with spillover into hidden columns/rows
    -   similar to Observable, can display formula by using formula to display a formula for a cell
    -   similar to Observable, can hide the return value by hiding the return value column/row
    -   can intersperse text (no Markdown or TeX support, but do have editor capabilities)
    
-   3D tensor representation

    -   create a tensor from matrices listed according to a stride
    -   need to be vertically arranged, since matrices are best in row-major order
    -   for visual ease, each matrix should be separated by a blank line
    -   can assemble the tensor in JavaScript by converting to row-major and omitting the blank row separating matrices
    -   if a blank line is the convention/standard, for functions which explicitly operate on tensors (e.g., certain linear algebra functions?), can just assume that when given a range for a tensor argument along with the number of rows and columns per matrix, this can be converted to a tensor accordingly.
        -   if assume tensor convention, no need to provide num rows and num cols, as we can determine that automatically in JavaScript by simple iteration
    -   **UPDATE**: allow users to specify the delimiter
        -   e.g., may want to use blank cells to represent "missing"/ignored values
        
-   4D tensor representation

    -   same as 3D representation, but with blank columns indicating the next dimension (e.g., time)
        -   **UPDATE**: allow users to specify the delimiter
    -   this would not be the most efficient storage representation given nested arrays, as the fourth dimension would be delineated within each row (i.e., row 1 would have the row 1s for each tensor, etc)
        -   while nested arrays are more problematic, if flattened to an ndarray, this isn't as much an issue, as this is equivalent to having reordered axes/dimensions
        
-   ND tensor representation

    -   in general, we should be able to generalize to more than 4D by allowing for separate delimiters to delineate each dimension
        -   in this case, each dimension >1 corresponds to a tile, and, as move from inner to outer dimensions, the outer dimensions contain nested tiles (nested dolls)
        
-   can we support allowing a user to indicate that a linear (flat) array (column/row) is a tensor of a specified shape?

    -   e.g., suppose I have a column of 100 values, and I want to perform operations such that it is interpreted as a 2x5x10 three-dimensional array.
    -   this would allow users to go beyond 3D tensor representation
    -   this would allow for leveraging slicing operations (e.g., more readily reversing elements along a dimension, etc)
        -   requires copying the reversed elements to a new linear array (i.e., we always need to copy to a new array which is single-segment contiguous)
            -   meaning, if a user reverses elements along a dimension, they should see that elements actually moved in the resulting range; in other words, we cannot rely on views
                -   but what if want to retain the original buffer in the output?
                
                    ```
                    STDLIB_NDREVERSE_DIMENSION( A1:A200, 2, "shape", {2, 5, 10}, "strides", {100, 20, 2}, "offset", 50, "order", "row-major", "view", FALSE)
                    ```

                    by default,

                    -   strides = shape2strides( shape, order )
                    -   offset = strides2offset( shape, strides )
                    -   order = "row-major"
                    -   view = TRUE
                        -   when TRUE, we ndarray/base/assign from the updated view into a copy of the original range
                        -   when FALSE, we serialize according to iteration order to a new range (i.e., the returned ndarray should have all positive strides, similar to how we serialize an ndarray to JSON)
                        -   **UPDATE**: see below on header info
                        
    -   what if we supported header info?
    
        -   e.g., scan the first few elements of the flattened array for dtype, shape, strides, offset, and order info; once find two consecutive numbers, then we've reached the end of the header
            -   how does that work for shape and strides which are comprised of multiple elements?
            -   maybe instead, we have a header followed by a blank line and then the data; or actually, just require a "data" header to indicate the start of the data
                -   **UPDATE**: yes
        -   if support header info, then if "view" is TRUE, we can just return the input data but with updated header info!
            -   when "view" is FALSE, we return a new data range
            
    -   slicing syntax?
    
        -   obviously no slicing objects, but can support subsequence strings!
    
-   support ability to specify an array computation graph?

    -   i.e., a sequence of operations on a provided range
    -   can we also support the ability to "print" out intermediate results so that users can see how each operation in a sequence transforms the results of the previous operation?
        
-   range operations

    -   splice
        -   would be useful for inserting a range within another range
        -   e.g., replace a submatrix within a matrix
    -   slice
        -   for a simple range, this is more easily achieved with built-in ops; however, for tensors, things get more interesting
    -   fliplr/ud etc for tensors/matrices
        -   would be nice for demoing tensor/matrix operations, as can see value output
    -   range2tensor3d
        -   `range2tensor3d(rows_per_matrix)` where rows per matrix must evenly divide number of rows in range
    -   tensor3d2range
        -   tensor to compact representation

-   data types

    -   d: float64/number
    -   s: string
    -   x: boolean
    -   o: generic/any
    -   z: complex128/complex
    
-   shape( range )

    -   return the number of rows and columns for a provided range
    
-   add tooling to track Code.gs bundle size

    -   can also use tooling to inspect bundle contents and create a visual plot
    
-   add tests for NaN and infinity output in d_d and dd_d APIs

    -   need to test option values and expected output
    
-   determine whether gsheets/object/shallow-copy is needed anymore

-   remove array/broadcasted-ternary2d once stdlib pkg available


## Packages

### array

-   [ ] datespace
-   [x] full
-   [ ] incrspace
-   [x] linspace
-   [ ] logspace
-   [x] ones
-   [ ] unitspace
-   [x] zeros
-   [ ] cartesian-square
-   [ ] cartesian-product
-   [ ] cartesian-power
-   [ ] n-cartesian-product
-   [ ] one-to
-   [ ] zero-to
-   [ ] take

### assert

-   [ ] contains
-   [ ] is-absolute-http-uri
-   [ ] is-absolute-path
-   [ ] is-absolute-uri
-   [ ] is-alphagram
-   [ ] is-alphanumeric
-   [ ] is-anagram
-   [ ] is-ascii
-   [ ] is-between
-   [ ] is-binary-string
-   [ ] is-blank-string
-   [ ] is-boolean
-   [ ] is-capitalized
-   [ ] is-composite
-   [ ] is-cube-number
-   [ ] is-current-year (need to be careful here due to timezones and the difference between where appscript is running and the timezone of the user's sheet)
-   [ ] is-digit-string
-   [ ] is-email-address
-   [ ] is-empty-string
-   [ ] is-even
-   [ ] is-falsy
-   [ ] is-finite
-   [ ] is-hex-string
-   [ ] is-infinite (??? are infinities allowed in sheet cells? No.)
-   [ ] is-integer
-   [ ] is-leap-year
-   [ ] is-localhost
-   [ ] is-lowercase
-   [ ] is-nan (??? is NaN allowed in sheet cells? No.)
-   [ ] is-negative-integer
-   [ ] is-negative-number
-   [ ] is-nonnegative-integer
-   [ ] is-nonnegative-number
-   [ ] is-nonpositive-integer
-   [ ] is-nonpositive-number
-   [ ] is-number
-   [ ] is-odd
-   [ ] is-positive-integer
-   [ ] is-positive-number
-   [ ] is-prime
-   [ ] is-probability
-   [ ] is-regexp-string
-   [ ] is-relative-path
-   [ ] is-relative-uri
-   [ ] is-semver
-   [ ] is-square-number
-   [ ] is-string
-   [ ] is-triangular-number
-   [ ] is-truthy
-   [ ] is-unc-path
-   [ ] is-uppercase
-   [ ] is-uri
-   [ ] is-whitespace

### datasets

-   [x] afinn-111
-   [x] afinn-96
-   [x] anscombes-quartet
-   [ ] berndt-cps-wages-1985
-   [x] cdc-nchs-us-births-1969-1988
-   [x] cdc-nchs-us-births-1994-2003
-   [ ] cdc-nchs-us-infant-mortality-bw-1915-2013
-   [ ] dale-chall-new
-   [ ] female-first-names-en
-   [ ] frb-sf-wage-rigidity
-   [ ] harrison-boston-house-prices-corrected
-   [ ] harrison-boston-house-prices
-   [x] herndon-venus-semidiameters
-   [ ] liu-negative-opinion-words-en
-   [ ] liu-positive-opinion-words-en
-   [ ] male-first-names-en
-   [ ] minard-napoleons-march
-   [ ] month-names-en
-   [x] nightingales-rose
-   [ ] pace-boston-house-prices
-   [x] ssa-us-births-2000-2014
-   [ ] standard-card-deck
-   [ ] stopwords-en
-   [x] suthaharan-single-hop-sensor-network
-   [ ] us-states-abbr
-   [ ] us-states-capitals-names
-   [ ] us-states-capitals
-   [ ] us-states-names-capitals
-   [ ] us-state-names

### math

-   [ ] base/special/\*
-   [x] base/special/riemann-zeta

### nlp

-   [ ] expand-acronyms
-   [ ] expand-contractions
-   [ ] ordinalize
-   [ ] porter-stemmer
-   [ ] tokenize

### number

-   [ ] float64/base/exponent
-   [ ] float64/base/from-binary-string
-   [ ] float64/base/from-words
-   [ ] float64/base/get-high-word
-   [ ] float64/base/get-low-word
-   [ ] float64/base/normalize
-   [ ] float64/base/set-high-word
-   [ ] float64/base/set-low-word
-   [ ] float64/base/signbit
-   [ ] float64/base/to-binary-string
-   [ ] float64/base/to-words
-   [ ] uint16/base/from-binary-string
-   [ ] uint16/base/to-binary-string
-   [ ] uint32/base/from-binary-string
-   [ ] uint32/base/rotl
-   [ ] uint32/base/rotr
-   [ ] uint32/base/to-binary-string
-   [ ] uint8/base/from-binary-string
-   [ ] uint8/base/to-binary-string

### random

-   [x] base/arcsine
-   [x] base/bernoulli
-   [x] base/beta
-   [x] base/betaprime
-   [x] base/binomial
-   [x] base/box-muller
-   [x] base/cauchy
-   [x] base/chi
-   [x] base/chisquare
-   [x] base/cosine
-   [x] base/discrete-uniform
-   [x] base/erlang
-   [x] base/exponential
-   [x] base/f
-   [x] base/frechet
-   [x] base/gamma
-   [x] base/geometric
-   [x] base/gumbel
-   [x] base/hypergeometric
-   [x] base/improved-ziggurat
-   [x] base/invgamma
-   [x] base/kumaraswamy
-   [x] base/laplace
-   [x] base/levy
-   [x] base/logistic
-   [x] base/lognormal
-   [x] base/minstd-shuffle
-   [x] base/minstd
-   [x] base/mt19937
-   [x] base/negative-binomial
-   [x] base/normal
-   [x] base/pareto-type1
-   [x] base/poisson
-   [ ] base/randi
-   [ ] base/randn
-   [ ] base/randu
-   [x] base/rayleigh
-   [x] base/t
-   [x] base/triangular
-   [x] base/uniform
-   [x] base/weibull
-   [ ] sample (needs refactoring)
-   [ ] shuffle (needs refactoring)

### simulate

-   [ ] awgn
-   [ ] awln
-   [ ] awun
-   [ ] bartlett-hann-pulse
-   [ ] bartlett-pulse
-   [ ] cosine-wave
-   [ ] flat-top-pulse
-   [ ] hann-pulse
-   [ ] lanczos-pulse
-   [ ] periodic-sinc
-   [ ] pulse
-   [x] sawtooth-wave
-   [ ] sine-wave
-   [ ] square-wave
-   [ ] triangle-wave

### stats

-   [ ] anova1
-   [x] bartlett-test
-   [ ] binomial-test
-   [ ] chi2gof
-   [ ] chi2test
-   [ ] fligner-test
-   [ ] kruskal-test
-   [ ] kstest
-   [ ] levene-test
-   [ ] lowess
-   [ ] padjust
-   [ ] pcorrtest
-   [ ] ranks
-   [ ] ttest
-   [ ] ttest2
-   [ ] vartest
-   [ ] wilcoxon
-   [ ] ztest
-   [ ] ztest2
-   [ ] base/\*
-   [ ] base/dists/\*

### string

-   [ ] acronym
-   [x] camelcase
-   [x] capitalize
-   [ ] code-point-at (???)
-   [x] constantcase
-   [ ] ends-with (`endsWith( value|range, value|range )` with support for broadcasting, which would allow, e.g., testing multiple values against an input range)
-   [ ] format (idea: be able to broadcast arguments, similar to `@stdlib/console/log-each`)
-   [ ] from-code-point
-   [x] kebabcase
-   [ ] left-pad
-   [ ] left-trim-n
-   [ ] left-trim
-   [x] lowercase
-   [ ] num-grapheme-clusters
-   [ ] pad
-   [x] pascalcase
-   [ ] percent-encode
-   [ ] remove-first
-   [ ] remove-last
-   [ ] remove-punctuation
-   [ ] remove-words
-   [ ] repeat
-   [ ] replace
-   [ ] reverse
-   [ ] right-pad
-   [ ] right-trim-n
-   [ ] right-trim
-   [x] snakecase
-   [ ] split-grapheme-clusters
-   [x] startcase
-   [ ] starts-with
-   [ ] substring-after-last
-   [ ] substring-after
-   [ ] substring-before-last
-   [ ] substring-before
-   [ ] trim
-   [ ] truncate-middle
-   [ ] truncate
-   [x] uncapitalize
-   [x] uppercase

### utils

-   [ ] any => for >1D, ability to specify axis?
-   [ ] bifurcate
-   [ ] convert-path
-   [ ] dirname
-   [ ] dsv/parse (???)
-   [ ] every
-   [ ] extname
-   [ ] flatten-array => use array/base/flatten instead?
-   [ ] group
-   [ ] index-of
-   [ ] none
-   [ ] some
-   [ ] tabulate


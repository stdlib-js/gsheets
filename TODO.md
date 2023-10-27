# TODO

-   Use doctrine to transform JSDoc comments to a minimal version suitable to displaying help in Google sheets

    -   remove `@example` tags
    -   remove extended descriptions (only keep the first line)
    -   remove backticks from descriptions
    
-   add benchmarks

-   add unit tests

-   POC distribution functions

-   POC msk API

-   create a scaffold for unary mathematical functions

    -   database with alias, stdlib pkg name, description, and example value
    
-   monetization strategy

    -   create an editor menu
    -   ability to display rendered help (as extracted from JSDoc Markdown comments)
    -   links to related functions
    -   function search
    -   examples
    -   tutorials (e.g., machine learning with sample datasets; could have option to load a tutorial template)
    -   videos and educational materials
    -   product announcements (notifications in the menu when we've released new features)
    -   ability to submit maintenance and feature requests
    -   product support
    -   auto-migration functionality whenever we update APIs (e.g., rename `STDLIB_FOO` to `STDLIB_BAR`)
    -   the editor menu could be the paid product (user has to sign-up and login for help, search, tutorials, etc; this would also mean that functions could be used without paying, thus allowing sheets using stdlib functions to be sharable and still functional)
    
-   3D tensor representation

    -   create a tensor from matrices listed according to a stride
    -   need to be vertically arranged, since matrices are best in row-major order
    -   for visual ease, each matrix should be separated by a blank line
    -   can assemble the tensor in JavaScript by converting to row-major and omitting the blank row separating matrices
    -   if a blank line is the convention/standard, for functions which explicitly operate on tensors (e.g., certain linear algebra functions?), can just assume that when given a range for a tensor argument along with the number of rows and columns per matrix, this can be converted to a tensor accordingly.
        -   if assume tensor convention, no need to provide num rows and num cols, as we can determine that automatically in JavaScript by simple iteration
        
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
-   [ ] is-current-year (need to be careful here due to timezones)
-   [ ] is-digit-string
-   [ ] is-email-address
-   [ ] is-empty-string
-   [ ] is-even
-   [ ] is-falsy
-   [ ] is-finite
-   [ ] is-hex-string
-   [ ] is-infinite (??? are infinities allowed in sheet cells?)
-   [ ] is-integer
-   [ ] is-leap-year
-   [ ] is-localhost
-   [ ] is-lowercase
-   [ ] is-nan (??? is NaN allowed in sheet cells?)
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
-   [ ] base/gamma
-   [ ] base/geometric
-   [ ] base/gumbel
-   [ ] base/hypergeometric
-   [ ] base/improved-ziggurat
-   [ ] base/invgamma
-   [ ] base/kumaraswamy
-   [ ] base/laplace
-   [ ] base/levy
-   [ ] base/logistic
-   [ ] base/lognormal
-   [x] base/minstd-shuffle
-   [x] base/minstd
-   [x] base/mt19937
-   [ ] base/negative-binomial
-   [x] base/normal
-   [ ] base/pareto-type1
-   [ ] base/poisson
-   [ ] base/randi
-   [ ] base/randn
-   [ ] base/randu
-   [ ] base/rayleigh
-   [ ] base/t
-   [ ] base/triangular
-   [x] base/uniform
-   [ ] base/weibull
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
-   [ ] format (idea: be able to broadcast arguments, similar to `@stdlib/array/log`)
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

-   [ ] any
-   [ ] bifurcate
-   [ ] convert-path
-   [ ] dirname
-   [ ] dsv/parse (???)
-   [ ] every
-   [ ] extname
-   [ ] flatten-array
-   [ ] group
-   [ ] index-of
-   [ ] none
-   [ ] some
-   [ ] tabulate


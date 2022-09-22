# TODO

-   Use doctrine to transform JSDoc comments to a minimal version suitable to displaying help in Google sheets

    -   remove `@example` tags
    -   remove extended descriptions (only keep the first line)
    
-   micro-optimization: when provided a single row (e.g., `x = [ [ 1, 2, 3 ] ]`), flattening does not need to involve a copy; instead, just return the row values (e.g., `x[ 0 ]`) as the flattened array

    -   create in-house flatten2d module

-   add benchmarks

-   add unit tests



## Packages

### array

-   datespace
-   full
-   incrspace
-   linspace
-   logspace
-   ones
-   unitspace
-   zeros

### assert

-   contains
-   is-absolute-http-uri
-   is-absolute-path
-   is-absolute-uri
-   is-alphagram
-   is-alphanumeric
-   is-anagram
-   is-ascii
-   is-between
-   is-binary-string
-   is-blank-string
-   is-boolean
-   is-capitalized
-   is-composite
-   is-cube-number
-   is-current-year (need to be careful here due to timezones)
-   is-digit-string
-   is-email-address
-   is-empty-string
-   is-even
-   is-falsy
-   is-finite
-   is-hex-string
-   is-infinite (??? are infinities allowed in sheet cells?)
-   is-integer
-   is-leap-year
-   is-localhost
-   is-lowercase
-   is-nan (??? is NaN allowed in sheet cells?)
-   is-negative-integer
-   is-negative-number
-   is-nonnegative-integer
-   is-nonnegative-number
-   is-nonpositive-integer
-   is-nonpositive-number
-   is-number
-   is-odd
-   is-positive-integer
-   is-positive-number
-   is-prime
-   is-probability
-   is-regexp-string
-   is-relative-path
-   is-relative-uri
-   is-semver
-   is-square-number
-   is-string
-   is-triangular-number
-   is-truthy
-   is-unc-path
-   is-uppercase
-   is-uri
-   is-whitespace

### datasets

-   afinn-111
-   afinn-96
-   anscombes-quartet
-   berndt-cps-wages-1985
-   cdc-nchs-us-births-1969-1988
-   cdc-nchs-us-births-1994-2003
-   cdc-nchs-us-infant-mortality-bw-1915-2013
-   dale-chall-new
-   female-first-names-en
-   frb-sf-wage-rigidity
-   harrison-boston-house-prices-corrected
-   harrison-boston-house-prices
-   herndon-venus-semidiameters
-   liu-negative-opinion-words-en
-   liu-positive-opinion-words-en
-   male-first-names-en
-   minard-napoleons-march
-   month-names-en
-   nightingales-rose
-   pace-boston-house-prices
-   ssa-us-births-2000-2014
-   standard-card-deck
-   stopwords-en
-   us-states-abbr
-   us-states-capitals-names
-   us-states-capitals
-   us-states-names-capitals
-   us-state-names

### math

-   base/special/\*

### nlp

-   expand-acronyms
-   expand-contractions
-   ordinalize
-   porter-stemmer
-   tokenize

### number

-   float64/base/exponent
-   float64/base/from-binary-string
-   float64/base/from-words
-   float64/base/get-high-word
-   float64/base/get-low-word
-   float64/base/normalize
-   float64/base/set-high-word
-   float64/base/set-low-word
-   float64/base/signbit
-   float64/base/to-binary-string
-   float64/base/to-words
-   uint16/base/from-binary-string
-   uint16/base/to-binary-string
-   uint32/base/from-binary-string
-   uint32/base/rotl
-   uint32/base/rotr
-   uint32/base/to-binary-string
-   uint8/base/from-binary-string
-   uint8/base/to-binary-string

### random

-   base/\*
-   sample (needs refactoring)
-   shuffle (needs refactoring)

### simulate

-   awgn
-   awln
-   awun
-   bartlett-hann-pulse
-   bartlett-pulse
-   cosine-wave
-   flat-top-pulse
-   hann-pulse
-   lanczos-pulse
-   periodic-sinc
-   pulse
-   sawtooth-wave
-   sine-wave
-   square-wave
-   triangle-wave

### stats

-   anova1
-   bartlett-test
-   binomial-test
-   chi2gof
-   chi2test
-   fligner-test
-   kruskal-test
-   kstest
-   levene-test
-   lowess
-   padjust
-   pcorrtest
-   ranks
-   ttest
-   ttest2
-   vartest
-   wilcoxon
-   ztest
-   ztest2
-   base/\*
-   base/dists/\*

### string

-   acronym
-   camelcase
-   capitalize
-   code-point-at (???)
-   constantcase
-   ends-with
-   format
-   from-code-point
-   kebabcase
-   left-pad
-   left-trim-n
-   left-trim
-   lowercase
-   num-grapheme-clusters
-   pad
-   pascalcase
-   percent-encode
-   remove-first
-   remove-last
-   remove-punctuation
-   remove-words
-   repeat
-   replace
-   reverse
-   right-pad
-   right-trim-n
-   right-trim
-   snakecase
-   split-grapheme-clusters
-   startcase
-   starts-with
-   substring-after-last
-   substring-after
-   substring-before-last
-   substring-before
-   trim
-   truncate-middle
-   truncate
-   uncapitalize
-   uppercase

### utils

-   any
-   bifurcate
-   convert-path
-   dirname
-   dsv/parse (???)
-   every
-   extname
-   flatten-array
-   group
-   index-of
-   none
-   some
-   tabulate


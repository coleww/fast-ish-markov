fast-ish-markov
----------------

:car: a decently fast and synchronous markov for when u just need some garbage text

### MARKOV TIPS
- cleanup yr own dang lines yrself! lowercase, splitting-on/removing line-ending punctuation, etc.
- best effects gained if u "rate" the output somehow. i.e, generate a thousand lines, run them through some algorithm that returns a "score"
  - u know like, maybe u keep generating markov lines OVER AND OVER until u find ones that rhyme?
  - or maybe u do POS analysis on a known text and generate markov lines till u have a match?
  - get wild!
- a wordfilter is also recommeneded. dariusk/wordfilter, jimkang/iscool, or coleww/this-is-probably-ok-to-say are all good choices.
- another neat trick is to check the markov output against the source lines with a levehnstein distance thing, to make sure it's not just repeating "real text"
- hey! since u already have this garbled text, why not run it through further text processors? word-vomit, poetic-vomit, diacriticize, new-slang, to-unicode, etc.
- make multiple chains and have them dip into each other. if u provide a large `num`, the chain will run till it hits a stop, at which point u slice off the last `n` words and try another chain. Mixing a ton of corpuses isn't always advisable, but having several chains that each mix a few corpii and each flow into one another might be more interestinger.
- use markovs as a component in a template, i.e, only generate short bursts of words based on keys for a template. "and they said '{generate some stuff}' and so on and so on etc."
- only seed the markov with lines of a known format, i.e, "I WISH I WAS A _____________", then u can fill based on "I WISH" and let the pseudo-magic flourish
- 


[![NPM](https://nodei.co/npm/fast-markov.png)](https://nodei.co/npm/fast-markov/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Build Status](https://secure.travis-ci.org/coleww/fast-markov.png)](http://travis-ci.org/coleww/fast-markov)

### EXAMPLE

```
var markov = require('fast-ish-markov')
var m = markov(["i like cats", "i like dogs"], 2)
m.fill(m.pick(), 3)
// will be either "i like cats" or "i like dogs". yay probability!
```

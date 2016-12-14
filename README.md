# Dissolve Generator

> Cool 2D dissolve effect generator

This module exposes a generator for generating pseudorandom sample points over a 2D integer grid.

The order in which the samples are generated appears random, but it is actually quite deterministic and, in particular, [space-filling](https://www.wikiwand.com/en/Space-filling_curve) in that it the samples are guaranteed to *visit* every point in the domain.

This effect was used in a lot of retro video games to dissolve the screen between foreground and background images.

## Usage

```javascript
const dissolve = require('dissolve')

const generator = dissolve(300, 400)
generator.next()
generator.next()
// ...
```

## Citation

This effect was originally created by Mike Morton, appearing in the first volume of the classic Graphics Gems series.

[A Digital Dissolve Effect by Mike Morton](http://dl.acm.org/citation.cfm?id=90821)
"Graphics Gems", Academic Press, 1990

## License

MIT (c) Travis Fischer 2016

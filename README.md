# Dissolve

> Cool 2D dissolve effect generator

![Dissolve Demo](https://raw.github.com/fisch0920/dissolve-generator/master/demo/demo.gif)

This module exposes a generator for generating pseudorandom points over a 2D integer grid.

The generated points appear random, but they are actually quite deterministic and, in particular, [space-filling](https://www.wikiwand.com/en/Space-filling_curve) in that it the samples are guaranteed to *visit* every point in the domain.

This effect was used in a lot of retro video games to transition the screen between foreground and background images.

## Usage

```bash
npm install dissolve-generator
```

```javascript
const dissolve = require('dissolve-generator')

const generator = dissolve(300, 400)
generator.next()
generator.next()
// ... will generate a sample for each of the 300 * 400 points in the domain
```

## Demo

There is a demo which visualizes the algorithm under the `demo/` folder.

## Citation

This effect was originally created by Mike Morton, appearing in the first volume of the classic Graphics Gems series.

[A Digital Dissolve Effect by Mike Morton](http://dl.acm.org/citation.cfm?id=90821)
"Graphics Gems", Academic Press, 1990

## License

MIT (c) Travis Fischer 2016

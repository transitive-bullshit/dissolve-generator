const assert = require('assert')
const test = require('tape')

const dissolve = require('.')

function test2DGenerator (width, height) {
  const generator = dissolve(width, height)
  let numSamples = 0
  let set = { }

  do {
    let next = generator.next()
    if (next.done) break

    const x = next.value[0]
    const y = next.value[1]

    if (set[x] === undefined) {
      set[x] = { }
    }

    // console.log(numSamples, ')', x, y, set[x][y] === undefined)

    assert(!isNaN(x))
    assert(!isNaN(y))

    assert(x >= 0)
    assert(x < width)
    assert(y >= 0)
    assert(y < height)

    // ensure unique values
    assert(set[x][y] === undefined)
    set[x][y] = true

    numSamples++
  } while (true)

  // ensure the exact number of samples were generated
  assert(numSamples === width * height)
}

test('squares', function (t) {
  test2DGenerator(2, 2)
  test2DGenerator(5, 5)
  test2DGenerator(200, 200)
  t.end()
})

test('non-squares', function (t) {
  test2DGenerator(5, 10)
  test2DGenerator(100, 1500)
  t.end()
})

test('large generators', function (t) {
  test2DGenerator(100, 8000)
  test2DGenerator(10000, 300)
  t.end()
})

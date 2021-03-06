(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.dissolve = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Cool dissolve effect which generates point samples uniformly over a given
 * 2D domain. The order in which the samples are generated looks random, but
 * it is actually quite deterministic and guaranteed to "visit" every point
 * in the domain.
 */

const RAND_MASKS = [
  0x00000001, 0x00000003, 0x00000006, 0x0000000C, 0x00000014, 0x00000030,
  0x00000060, 0x000000B8, 0x00000110, 0x00000240, 0x00000500, 0x00000CA0,
  0x00001B00, 0x00003500, 0x00006000, 0x0000B400, 0x00012000, 0x00020400,
  0x00072000, 0x00090000, 0x00140000, 0x00300000, 0x00400000, 0x00D80000,
  0x01200000, 0x03880000, 0x07200000, 0x09000000, 0x14000000, 0x32800000,
  0x48000000, 0xA3000000
]

/**
 * @param {Number} width  Integer
 * @param {Number} height Integer
 *
 * @return {Generator<Tuple>}
 */
module.exports = function *(width, height) {
  const size = width * height
  const bitWidth = getBitWidth(size)
  const mask = RAND_MASKS[bitWidth - 1]

  let seq = 1

  do {
    const x = 0.5 + seq % width
    const y = Math.ceil(seq / width) - 1.0

    yield [ x, y ]

    // iterate and ignore samples outside of our target rectangular area
    do {
      seq = (seq >> 1) ^ ((seq & 1) * mask)
    } while (seq > size)
  } while (seq !== 1)
}

function getBitWidth (n) {
  let width = 0

  while (n > 0) {
    n >>= 1
    ++width
  }

  return width
}

},{}]},{},[1])(1)
});
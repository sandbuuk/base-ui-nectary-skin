'use strict'

function createMap(values, ignoreCase) {
  const map = {}

  values.forEach((value) => {
    map[value] = 1
  })

  return ignoreCase ? function(value) {
    return map[value.toLowerCase()] === 1
  } : function(value) {
    return map[value] === 1
  }
}

function replaceAsync(str, regex, asyncFn) {
  const promises = []

  str.replace(regex, (match, ...args) => {
    const promise = asyncFn(match, ...args)

    promises.push(promise)
  })

  const data = promises

  return str.replace(regex, () => data.shift())
}

exports.createMap = createMap

exports.createMapFromString = function(values, ignoreCase) {
  return createMap(values.split(/,/), ignoreCase)
}

exports.replaceAsync = replaceAsync

var eachCons = require('each-cons')
function pickRando (arr) {
  return arr[~~(Math.random() * arr.length)]
}

module.exports = function (lines, n) {
  var chain = {}
  lines.forEach(function (line) {
    eachCons(line.split(' '), n + 1).forEach(function (link) {
      var k = link.slice(0, n).join(' ')
      if (!chain[k]) chain[k] = []
      chain[k].push(link[link.length - 1])
    })
  })
  return {
    fill: function (start, num) {
      var result = start.split(' ')
      while (result.length < num) {
        var res = chain[result.slice(result.length - n, result.length).join(' ')]
        res && res.length ? result.push(pickRando(res)) : num = -Infinity
      }
      return result.join(' ')
    },
    pick: function () {
      return pickRando(Object.keys(chain))
    },
    chain: chain
  }
}

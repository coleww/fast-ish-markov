var tap = require('tap')

var fastMarkov = require('./')

tap.test('does the thing', function (t) {
  t.plan(1)
  var m = fastMarkov(['i like cats', 'i like dogs'], 2)
  t.ok(m.fill(m.pick(), 3).match(/i like (dogs|cats)/) , 'does it')
})

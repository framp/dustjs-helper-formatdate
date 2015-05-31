var dust = require('dustjs-linkedin')
dust.helpers = require('dustjs-helpers').helpers
require('./index')

var assert = require("assert")

describe('formatdate', function(){
  it('should return formatted date using format', function(done){
    var code = '{@formatDate date="2014-12-10" format="YYYY-MM-DD"/}'
    var context = {}
    dust.renderSource(code, context, function (err, out) {
      assert.equal(out, '2014-12-10')
      done()
    })
  })
  it('should return formatted date using the provided language', function(done){
    var code = '{@formatDate date="2014-12-10" format="dddd YYYY-MM-DD" lan="it-IT"/}'
    var context = {}
    dust.renderSource(code, context, function (err, out) {
      assert.equal(out, 'Mercoledì 2014-12-10')
      done()
    })
  })
  it('should use language en-US if not provided', function(done){
    var code = '{@formatDate date="2014-12-10" format="dddd YYYY-MM-DD" /}'
    var context = {}
    dust.renderSource(code, context, function (err, out) {
      assert.equal(out, 'Wednesday 2014-12-10')
      done()
    })
  })
  it('should use current date if date not provided', function(done){
    var code = '{@formatDate format="YYYY-MM-DD" /}'
    var context = {}
    dust.renderSource(code, context, function (err, out) {
      assert.equal(out, formatYearMonthDate(new Date))
      done()
    })
  })
})

function formatYearMonthDate(date) {
  return date.getFullYear() + '-' +
        ((''+(date.getMonth()+1)).length==1 ? '0' : '') +
        (date.getMonth()+1) + '-' +
        ((''+date.getDate()).length==1 ? '0' : '') +
        date.getDate()
}
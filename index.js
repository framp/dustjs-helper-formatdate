(function (dust, moment) {
  dust.helpers = dust.helpers || {}
  dust.helpers.formatDate = function(chunk, context, bodies, params) {
    var date = dust.helpers.tap(params.date, chunk, context) || + new Date
    var format  = dust.helpers.tap(params.format, chunk, context)
    var lan = dust.helpers.tap(params.lan, chunk, context) || 'en-US'
    date = +date || date
    moment.locale(lan)
    return chunk.write(moment(new Date(date)).format(format))
  }

  if (typeof exports !== 'undefined') {
    module.exports = dust
  }

}(
  typeof exports !== 'undefined' ? require('dustjs-linkedin') : dust,
  typeof exports !== 'undefined' ? require('moment') : moment
));

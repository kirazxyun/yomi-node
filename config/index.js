var localConfig = require('./config.local')

var config = {}
if(process.env.NODE_ENV === 'local') {
  config = localConfig
}

module.exports = config

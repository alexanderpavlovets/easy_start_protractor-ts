process.env.TS_NODE_FILES = true
require('ts-node').register()

module.exports = {
  ...require('./config/protractor.conf')
}
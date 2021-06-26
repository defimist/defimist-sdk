
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./defimist-sdk.cjs.production.min.js')
} else {
  module.exports = require('./defimist-sdk.cjs.development.js')
}

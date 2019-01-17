'use strict'

const routes = {
  'v2': require('./v2')
}


exports.routes = function (version) {
  const matches = /(\d+)(\.\d+)?/.exec(version)
  const major = (matches ? matches[ 1 ] : version)
  if (routes['v' + major]) {
    return routes['v' + major]
  } else {
    throw new Error('The API version v' + version + ' is not available!')
  }
}

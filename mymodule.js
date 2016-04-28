const http = require('http')

const processResponse = (cb, res) => {
  res.setEncoding('utf8')
  res.on('data', data => cb(data))
}

const getData = (url, cb) => {
  http.get(url, res => processResponse(cb, res))
}

module.exports = getData

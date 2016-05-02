const http = require('http')
const concatStream = new require('concat-stream')

const processResponse = (cb, data) => {
  cb(data)
}

const getData = (url, cb) => {
  let data = ''
  http.get(url, res => {
    res.pipe(concatStream(data => processResponse(cb, data.toString('utf8'))))
  })
}

module.exports = getData

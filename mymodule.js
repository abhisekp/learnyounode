const http = require('http')
const bl = new require('bl')

const processResponse = (cb, data) => {
  cb(data)
}

const getData = (url, cb) => {
  let data = ''
  http.get(url, res => {
    res.setEncoding('utf8')
    res.on('data', (_data) => data += _data)
    res.on('end', () => processResponse(cb, data))
  })
}

module.exports = getData

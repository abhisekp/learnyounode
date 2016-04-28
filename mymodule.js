const http = require('http')
const bl = new require('bl')

const processResponse = (cb, res) => {
  res.pipe(BL((err, data)=> cb(String(data))))
}

const getData = (url, cb) => {
  http.get(url, res => processResponse(cb, res))
}

module.exports = getData

const http = require('http')
const concatStream = new require('concat-stream')

const processResponse = (cb, data) => {
  cb(null, data)
}

const getData = (url, cb) => {
  http.get(url, res => {
    res.pipe(concatStream(data => processResponse(cb, data.toString('utf8'))))
  })
}

const processUrls = (urlsObj, cb) => {
  urlsObj.forEach(urlObj => cb(urlObj.data))
}

const setupData = (urls, cb) => {
  const urlsObj = urls.map(url => ({
    url,
    done: false,
    data: ''
  }))

  urlsObj.forEach(urlObj => {
    getData(urlObj.url, (err, data) => {
      urlObj.data = data
      urlObj.done = true

      if (urlsObj.every(urlObj => urlObj.done)) {
        processUrls(urlsObj, cb)
      }
    })
  })

}

module.exports = setupData

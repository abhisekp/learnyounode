const http = require('http');
const concatStream = new require('concat-stream');
const async = require('async');

const processResponse = (cb, data) => {
  cb(null, data);
};

const getData = (url, cb) => {
  http.get(url, res => {
    res.pipe(
      concatStream(data => processResponse(cb, data.toString('utf8')))
    )
  });
};

const processUrls = (urlsObj, cb) => {
  urlsObj.forEach(urlObj => cb(urlObj.data))
};

const setupData = (urls, cb) => {
  async.map(
    urls,
    (url, cb) => getData(url, cb),
    (err, res) => res.forEach(cb)
  );
};

module.exports = setupData;

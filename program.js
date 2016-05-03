const getData = require('./mymodule')

const urls = process.argv.slice(2)

getData(urls, (data) => {
  console.log(data)
})

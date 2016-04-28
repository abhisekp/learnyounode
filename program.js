const getData = require('./mymodule')

const url = process.argv[2]

getData(url, (data) => {
  console.log(data)
})

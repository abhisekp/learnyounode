const getFileList = require('./mymodule')

const dir = process.argv[2]
const ext = process.argv[3]

getFileList(dir, ext, (err, filteredList) => {
  if(err) {
    return
  }

  filteredList.forEach(filename => console.log(filename))
})

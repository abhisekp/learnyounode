const fs = require('fs')

const isFileExt = (ext, filename) => {
  return filename.endsWith(`.${ext}`)
}

const getFileList = () => {
  const dir = process.argv[2]
  const ext = process.argv[3]

  fs.readdir(dir, (err, dirList) => {
    if (err) {
      return
    }

    dirList
      .filter(filename => isFileExt(ext, filename))
      .forEach(filename => console.log(filename))
  })
}

getFileList()

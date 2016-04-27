const fs = require('fs')

const isFileExt = (ext, filename) => {
  return filename.endsWith(`.${ext}`)
}

const getFileList = (dir, ext, cb) => {
  fs.readdir(dir, (err, dirList) => {
    if (err) {
      return cb(err)
    }

    const filteredList = dirList.filter(filename => isFileExt(ext, filename))

    cb(null, filteredList)
  })
}

module.exports = getFileList

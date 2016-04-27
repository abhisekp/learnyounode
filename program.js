const fs = require('fs')

/**
 * Count the number of newline characters in the string
 * @method
 * @param  {String} str the string
 * @return {Number}     number of new lines
 */
const countNewlines = (str) => {
  if(!str) {
    return 0
  }

  const newlines = str.match(/\n/g)

  if(!newlines) {
    return 0
  }

  return newlines.length
}

const getFile = () => {
  fs.readFile(process.argv[2], 'utf8', (err, fileStr) => {
    if (err) {
      return 0
    }
    
    const newlines = countNewlines(fileStr)
    console.log(newlines)
  })
}

getFile()

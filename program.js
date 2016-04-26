const fs = require('fs')

const countNewlines = (fileStr) => {
  if(!fileStr) {
    return 0
  }

  const newlines = fileStr.match(/\n/g)

  if(!newlines) {
    return 0
  }

  return newlines.length
}


const getFile = () => {
  try {
    const fileStr = fs.readFileSync(process.argv[2], 'utf8')
    return fileStr
  } catch (e) {}
}

const newlines = countNewlines(getFile())
console.log(newlines)

const sum = (a, b) => a + b

console.log(process.argv.slice(2).map(Number).reduce(sum))

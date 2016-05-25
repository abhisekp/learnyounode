#!/usr/bin/env node

const net = require('net');
const fp = require('lodash/fp');

const PORT = process.argv[2];

const getFormattedDate = dateObj => {
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes(); 
  
  const pad2 = fp.padCharsStart(0)(2)
  const monthStr = pad2(month);
  const dateStr = pad2(date);
  const hoursStr = pad2(hours);
  const minutesStr = pad2(minutes);
  
  return `${ year }-${ monthStr }-${ dateStr } ${ hoursStr }:${ minutesStr }`
}

net.createServer(socket => {
  const data = getFormattedDate(new Date);
  socket.write(data);
  socket.end('\n');
}).listen(PORT);

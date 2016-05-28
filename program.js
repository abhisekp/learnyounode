#!/usr/bin/env node

const net = require('net');
const fp = require('lodash/fp');
const strftime = require('strftime');
const parseArgs = require('minimist');

const args = parseArgs(process.argv);
const PORT = args._[2];

const getFormattedDate = dateObj => {
  return strftime('%Y-%m-%d %H:%M', dateObj);
}

net.createServer(socket => {
  const data = getFormattedDate(new Date);
  socket.write(data);
  socket.end('\n');
}).listen(PORT);

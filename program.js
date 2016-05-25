#!/usr/bin/env node

const fp = require('lodash/fp');
const http = require('http');
const fs = require('fs');
const parseArgs = require('minimist');
const path = require('path');

const args = parseArgs(process.argv);
const PORT = args._[2];
const relFilePath = args._[3];
const FILE_PATH = path.resolve(relFilePath);

const server = http.createServer((req, res) => {
  fs.createReadStream(FILE_PATH).pipe(res);
}).listen(PORT, '127.0.0.1', () => {
  const addr = server.address();
  console.log('Connection listening on %s : %d', addr.address, addr.port);
});

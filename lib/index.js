'use strict';

const {table} = require('table');
const format = require('./tableFormatter');
const {parse} = require('./parser');

module.exports = {
  print: (plugin) => parse(plugin).then((data) => console.log(JSON.stringify(data))),
  printTable: (plugin) => parse(plugin).then((data) => console.log(table(data.map(format))))
};

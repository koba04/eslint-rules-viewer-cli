const program = require('commander');
const {print, printTable} = require('./index');

program
.option('--table', 'print data as a table')
.option('--plugin [plugin]', 'target eslint plugin.  eslint-plugin-react is only supported the plugin')
.parse(process.argv)
;

const plugin = program.plugin;
if (plugin && plugin !== 'eslint-plugin-react') {
  console.error('Current supported plugin is eslint-plugin-react only!');
  process.exit(1);
}

program.table ? printTable(plugin) : print(plugin);
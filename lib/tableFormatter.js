'use strict';

module.exports = (data) => Object.keys(data).map((key) => {
  const value = data[key];
  switch (key) {
    case 'recommended':
      return value ? '✅ ' : ' ';
    case 'fixable':
      return value ? '🔧 ' : ' ';
    case 'markdown':
      return null;
    default:
      return value;
  }
})
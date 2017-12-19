const fs = require('fs');
const fetch = require('node-fetch');

const settings = require('./settings');

function parse(plugin) {

  const setting = plugin === 'eslint-plugin-react' ? settings['eslint-plugin-react'] : settings.eslint;

  return new Promise((resolve, reject) => {
    fs.readdir(`node_modules/${setting.name}/lib/rules/`, (err, files) => {
      if (err) reject(err);
      Promise.all(
        files
        .filter((file) => /\.js$/.test(file))
        .map((file) => {
          const ruleName = file.replace(/\.js$/, '')
          const rule = require(`${setting.name}/lib/rules/${ruleName}`);

          return fetch(`${setting.docsUrl}${ruleName}.md`)
          .then((res) => res.text())
          .then ((markdown) => {
            return {
              name: setting.name !== 'eslint' ? `${setting.name.replace('eslint-plugin-', '')}/${ruleName}` : ruleName,
              description: rule.meta.docs.description,
              category: rule.meta.docs.category,
              recommended: rule.meta.docs.recommended,
              fixable: rule.meta.fixable,
              markdown,
            };
          });
        })
      )
      .then(resolve)
      ;
    });
  });
}

module.exports = {
  parse
};
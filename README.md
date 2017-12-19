# eslint-rules-viewer-cli

The following examples are to generate ESLint rules json

```
% eslintrules-viewer-cli > eslit-rules.json
% eslintrules-viewer-cli --plugin eslint-plugin-react > eslit-plugin-react-rules.json
```

Each rules's format is

```json
  {
    "name": "accessor-pairs",
    "description": "enforce getter and setter pairs in objects",
    "category": "Best Practices",
    "recommended": false,
    "markdown":
      "# Enforces getter/setter pairs in objects (accessor-pairs)\n\nIt's a common mistake in JavaScript to create an object with just a setter for a property but never have a corresponding getter defined for it. Without a getter, you cannot read the property, so it ends up not being used.\n\nHere are some examples:\n\n```js\n// Bad\nvar o = {\n    set a(value) {\n        this.val = value;\n    }\n};\n\n// Good\nvar o = {\n    set a(value) {\n        this.val = value;\n    },\n    get a() {\n        return this.val;\n    }\n};\n\n```\n\nThis rule warns if setters are defined without getters. Using an option `getWithoutSet`, it will warn if you have a getter without a setter also.\n\n## Rule Details\n\nThis rule enforces a style where it requires to have a getter for every property which has a setter defined.\n\nBy activating the option `getWithoutSet` it enforces the presence of a setter for every property which has a getter defined.\n\n## Options\n\n* `setWithoutGet` set to `true` will warn for setters without getters (Default `true`).\n* `getWithoutSet` set to `true` will warn for getters without setters (Default `false`).\n\n### setWithoutGet\n\nExamples of **incorrect** code for the default `{ \"setWithoutGet\": true }` option:\n\n```js\n/*eslint accessor-pairs: \"error\"*/\n\nvar o = {\n    set a(value) {\n        this.val = value;\n    }\n};\n\nvar o = {d: 1};\nObject.defineProperty(o, 'c', {\n    set: function(value) {\n        this.val = value;\n    }\n});\n```\n\nExamples of **correct** code for the default `{ \"setWithoutGet\": true }` option:\n\n```js\n/*eslint accessor-pairs: \"error\"*/\n\nvar o = {\n    set a(value) {\n        this.val = value;\n    },\n    get a() {\n        return this.val;\n    }\n};\n\nvar o = {d: 1};\nObject.defineProperty(o, 'c', {\n    set: function(value) {\n        this.val = value;\n    },\n    get: function() {\n        return this.val;\n    }\n});\n\n```\n\n### getWithoutSet\n\nExamples of **incorrect** code for the `{ \"getWithoutSet\": true }` option:\n\n```js\n/*eslint accessor-pairs: [\"error\", { \"getWithoutSet\": true }]*/\n\nvar o = {\n    set a(value) {\n        this.val = value;\n    }\n};\n\nvar o = {\n    get a() {\n        return this.val;\n    }\n};\n\nvar o = {d: 1};\nObject.defineProperty(o, 'c', {\n    set: function(value) {\n        this.val = value;\n    }\n});\n\nvar o = {d: 1};\nObject.defineProperty(o, 'c', {\n    get: function() {\n        return this.val;\n    }\n});\n```\n\nExamples of **correct** code for the `{ \"getWithoutSet\": true }` option:\n\n```js\n/*eslint accessor-pairs: [\"error\", { \"getWithoutSet\": true }]*/\nvar o = {\n    set a(value) {\n        this.val = value;\n    },\n    get a() {\n        return this.val;\n    }\n};\n\nvar o = {d: 1};\nObject.defineProperty(o, 'c', {\n    set: function(value) {\n        this.val = value;\n    },\n    get: function() {\n        return this.val;\n    }\n});\n\n```\n\n## When Not To Use It\n\nYou can turn this rule off if you are not concerned with the simultaneous presence of setters and getters on objects.\n\n## Further Reading\n\n* [Object Setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)\n* [Object Getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)\n* [Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)\n"
  },
```

You can display ESLint rules as a table.

```
% eslintrules-viewer-cli --table
:
╟──────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┼──────────────────────┼────┼────┼──────╢
║ complexity                       │ enforce a maximum cyclomatic complexity allowed in a program                                      │ Best Practices       │    │    │      ║
╟──────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┼──────────────────────┼────┼────┼──────╢
║ computed-property-spacing        │ enforce consistent spacing inside computed property brackets                                      │ Stylistic Issues     │    │ 🔧  │      ║
╟──────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┼──────────────────────┼────┼────┼──────╢
║ consistent-return                │ require `return` statements to either always or never specify values                              │ Best Practices       │    │    │      ║
╟──────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┼──────────────────────┼────┼────┼──────╢
║ consistent-this                  │ enforce consistent naming when capturing the current execution context                            │ Stylistic Issues     │    │    │      ║
╟──────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┼──────────────────────┼────┼────┼──────╢
║ constructor-super                │ require `super()` calls in constructors                                                           │ ECMAScript 6         │ ✅  │    │      ║
╟──────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┼──────────────────────┼────┼────┼──────╢

:
```
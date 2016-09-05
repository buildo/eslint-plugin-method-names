# eslint-plugin-method-names

[![Build Status](https://travis-ci.org/buildo/eslint-plugin-method-names.svg?branch=master)](https://travis-ci.org/buildo/eslint-plugin-no-loops)
[![npm](https://img.shields.io/npm/v/eslint-plugin-method-names.svg)](https://www.npmjs.com/package/eslint-plugin-no-loops)

## Installation
```sh
npm install --save-dev eslint-plugin-method-names
```

## Usage
In your `.eslintrc`:

```javascript
{
  "plugins": [
    "method-names"
  ],
  "rules": {
    "method-names/method-names": [2, { regex: '^[a-z].*' }]
  }
}
```

## Rule
Restrict class method names to a regex. It applies to methods and static properties defining a function.

## Example
With the configuration above, the following patterns are considered valid

```js
class Foo {
  bar() {}
}

class Foo {
  bar = () => {}
}

class Foo {
  _bar = 40 + 2
}
```

whereas the following are considered errors

```js
class Foo {
  _bar() {}
}

class Foo {
  _bar = () => {}
}
```

## Why
This is useful for enforcing conventions like "methods should never start with an underscore".

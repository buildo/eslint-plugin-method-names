# eslint-plugin-method-names

[![Build Status](https://drone.our.buildo.io/api/badges/buildo/eslint-plugin-method-names/status.svg)](https://drone.our.buildo.io/buildo/eslint-plugin-method-names)
[![npm](https://img.shields.io/npm/v/eslint-plugin-method-names.svg)](https://www.npmjs.com/package/eslint-plugin-method-names)

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

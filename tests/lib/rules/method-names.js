'use strict';

var rule = require('../../../lib/rules/method-names');
var RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
  parser: 'babel-eslint',
  ecmaFeatures: {
    ecmaVersion: 6
  }
});

var ruleTester = new RuleTester();
ruleTester.run('method-names', rule, {
  valid: [
    {
      code: [
        '',
        'class Foo {',
        '  baz() { }',
        '}'
      ].join('\n'),
      options: [{ regex: '^[a-z].*' }]
    },
    {
      code: [
        '',
        'class Foo {',
        '  baz = () => { }',
        '}'
      ].join('\n'),
      options: [{ regex: '^[a-z].*' }]
    },
    {
      code: [
        '',
        'class Foo {',
        '  _baz = 40 + 2',
        '}'
      ].join('\n'),
      options: [{ regex: '^[a-z].*' }]
    }
  ],

  invalid: [
    {
      code: [
        '',
        'class Foo {',
        '  _bar() { }',
        '}'
      ].join('\n'),
      options: [{ regex: '^[a-z].*' }],
      errors: [ { message: 'method name must match regex /^[a-z].*/' } ]
    },
    {
      code: [
        '',
        'class Foo {',
        '  _bar = () => { }',
        '}'
      ].join('\n'),
      options: [{ regex: '^[a-z].*' }],
      errors: [ { message: 'method name must match regex /^[a-z].*/' } ]
    },

  ]
});

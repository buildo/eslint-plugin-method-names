'use strict';

module.exports = {

  create: function (context) {

    var regex = RegExp((context.options[0] || {}).regex);

    function reportError(node) {
      context.report(node, 'method name must match regex ' + regex, { identifier: node.name });
    }

    function checkMethodName(node) {
      if (!regex.test(node.key.name)) {
        reportError(node);
      }
    }

    function isFunctionExpression(node) {
      return node.type === 'FunctionExpression' || node.type === 'ArrowFunctionExpression';
    }

    function checkClassProperty(node) {
      if (isFunctionExpression(node.value)) {
        checkMethodName(node);
      }
    }

    return {
      MethodDefinition: checkMethodName,
      ClassProperty: checkClassProperty
    };

  }

};

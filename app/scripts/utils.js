define([

  'underscore'

], function (

  _

) {
  'use strict';

  var utils = {};

  /**
   * Safely console.warns something.  Takes an arbitrary number of arguments
   * with arbitrary types.
   */
  utils.warn = function () {
    if (console) {
      console.warn.apply(console, arguments);
    }
  };

  /**
   * Mixes in methods from one object to another.  console.warn's any
   * overwritten properties on the target.
   * @param {Object} target
   * @param {Object} source
   */
  utils.mixin = function (target, source) {
    _.each(_.keys(source), function (keyName) {
      if (source.hasOwnProperty(keyName)
          && typeof source[keyName] === 'function') {

        if (target[keyName]) {
          utils.warn('Overwriting "' + keyName + '" of ' + target);
        }

        target[keyName] = source[keyName];
      }
    });
  };

  return utils;
});

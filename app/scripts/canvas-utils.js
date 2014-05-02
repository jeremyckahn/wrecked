define(function () {
  'use strict';

  var canvasUtils = {};

  canvasUtils.clear = function () {
    this.context.width = this.context.width;
  };

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} h
   * @param {number} w
   */
  canvasUtils.fillRect = function (x, y, h, w) {
    this.canvasContext.fillRect(x, y, h, w);
  };

  return canvasUtils;
});

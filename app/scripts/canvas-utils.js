define(function () {
  'use strict';

  var canvasUtils = {};

  /**
   * @param {CanvasRenderingContext2D} canvasContext
   * @param {number} x
   * @param {number} y
   * @param {number} h
   * @param {number} w
   */
  canvasUtils.fillRect = function (canvasContext, x, y, h, w) {
    canvasContext.fillRect(x, y, h, w);
  };

  return canvasUtils;
});

/* jshint camelcase:false */
define([

  'underscore'

  ,'constants'

], function (

  _

  ,constants

) {
  'use strict';

  var canvasUtils = {};

  /**
   * @param {string=} opt_className
   */
  canvasUtils.createCanvas = function (opt_className) {
    var canvas = document.createElement('canvas');

    _.extend(canvas.style, {
      height: constants.VIEWPORT_HEIGHT + 'px'
      ,width: constants.VIEWPORT_WIDTH + 'px'
    });

    _.extend(canvas, {
      height: constants.VIEWPORT_HEIGHT
      ,width: constants.VIEWPORT_WIDTH
    });

    if (opt_className) {
      canvas.classList.add('player');
    }

    this.canvas = canvas;
    this.canvasContext = canvas.getContext('2d');
  };

  /**
   * @param {number} y
   * @return {number}
   */
  canvasUtils.transformYForScreen = function (y) {
    return this.canvas.height - y;
  };

  canvasUtils.clear = function () {
    this.canvas.width = this.canvas.width;
  };

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} h
   * @param {number} w
   */
  canvasUtils.fillRect = function (x, y, h, w) {
    this.canvasContext.fillRect(
        x,
        this.transformYForScreen(y) - h,
        h,
        w);
  };

  /**
   * @param {string} fillStyle
   */
  canvasUtils.fillStyle = function (fillStyle) {
    this.canvasContext.fillStyle = fillStyle;
  };

  return canvasUtils;
});

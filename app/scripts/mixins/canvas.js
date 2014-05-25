/* jshint camelcase:false */
define([

  'underscore'

  ,'constants'

], function (

  _

  ,constants

) {
  'use strict';

  var canvas = {};

  /**
   * @param {string=} opt_className
   */
  canvas.createCanvas = function (opt_className) {
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
  canvas.transformYForScreen = function (y) {
    return this.canvas.height - y;
  };

  canvas.clear = function () {
    this.canvas.width = this.canvas.width;
  };

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} h
   * @param {number} w
   */
  canvas.fillRect = function (x, y, h, w) {
    this.canvasContext.fillRect(
        x,
        this.transformYForScreen(y) - h,
        h,
        w);
  };

  /**
   * @param {string} fillStyle
   */
  canvas.fillStyle = function (fillStyle) {
    this.canvasContext.fillStyle = fillStyle;
  };

  return canvas;
});

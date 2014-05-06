/* jshint camelcase:false */
define(function () {
  'use strict';

  /**
   * All canvasUtils methods expect to be called by an Object with the
   * following own properties:
   *
   * @param {Wrecked} wrecked
   * @param {HTMLCanvasElement} canvas
   * @param {CanvasRenderingContext2D} canvasContext
   */
  var canvasUtils = {};

  /**
   * @param {string=} opt_className
   */
  canvasUtils.createCanvas = function (opt_className) {
    this.canvas = this.wrecked.createCanvas();
    this.canvasContext = this.canvas.getContext('2d');

    if (opt_className) {
      this.canvas.classList.add('player');
    }
  };

  canvasUtils.injectCanvas = function () {
    this.wrecked.injectCanvas(this.canvas);
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
    this.canvasContext.fillRect(x, y, h, w);
  };

  /**
   * @param {string} fillStyle
   */
  canvasUtils.fillStyle = function (fillStyle) {
    this.canvasContext.fillStyle = fillStyle;
  };

  return canvasUtils;
});

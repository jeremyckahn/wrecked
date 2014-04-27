define([

  'underscore'

  ,'constants'

], function (

  _

  ,constants

) {
  'use strict';

  /**
   * @param {HTMLElement} containerEl
   * @constructor
   */
  function Platformer (containerEl) {
    this.containerEl = containerEl;
    this.setupDOM();
    this.createPlayerLayer();
  }

  var proto = Platformer.prototype;

  proto.setupDOM = function () {
    _.extend(this.containerEl.style, {
      height: constants.VIEWPORT_HEIGHT + 'px'
      ,width: constants.VIEWPORT_WIDTH + 'px'
    });
  };

  proto.createPlayerLayer = function () {
    this.playerLayer = this.createCanvas();
    this.playerLayer.classList.add('player');
    this.injectCanvas(this.playerLayer);
  };

  /**
   * @return {HTMLCanvasElement}
   */
  proto.createCanvas = function () {
    var canvas = document.createElement('canvas');

    _.extend(canvas.style, {
      height: constants.VIEWPORT_HEIGHT + 'px'
      ,width: constants.VIEWPORT_WIDTH + 'px'
    });

    _.extend(canvas, {
      height: constants.VIEWPORT_HEIGHT
      ,width: constants.VIEWPORT_WIDTH
    });

    return canvas;
  };

  /**
   * @param {HTMLCanvasElement} canvas
   */
  proto.injectCanvas = function (canvas) {
    this.containerEl.appendChild(canvas);
  };

  return Platformer;
});

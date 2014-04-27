define([

  'underscore'

  ,'constants'
  ,'actors/player'

], function (

  _

  ,constants
  ,Player

) {
  'use strict';

  /**
   * @param {HTMLElement} containerEl
   * @constructor
   */
  function Game (containerEl) {
    this.containerEl = containerEl;
    this.setupDOM();
    this.player = new Player(this);
  }
  var fn = Game.prototype;

  fn.setupDOM = function () {
    _.extend(this.containerEl.style, {
      height: constants.VIEWPORT_HEIGHT + 'px'
      ,width: constants.VIEWPORT_WIDTH + 'px'
    });
  };

  /**
   * @return {HTMLCanvasElement}
   */
  fn.createCanvas = function () {
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
  fn.injectCanvas = function (canvas) {
    this.containerEl.appendChild(canvas);
  };

  return Game;
});

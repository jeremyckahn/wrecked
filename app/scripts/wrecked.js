define([

  'underscore'
  ,'keydrown'

  ,'constants'
  ,'actors/player'

], function (

  _
  ,kd

  ,constants
  ,Player

) {
  'use strict';

  /**
   * @param {HTMLElement} containerEl
   * @constructor
   */
  function Wrecked (containerEl) {
    this.containerEl = containerEl;
    this._events = {};

    this.setupDOM();
    this.player = new Player(this);
    kd.run(this.tick.bind(this));
  }
  var fn = Wrecked.prototype;

  fn.setupDOM = function () {
    _.extend(this.containerEl.style, {
      height: constants.VIEWPORT_HEIGHT + 'px'
      ,width: constants.VIEWPORT_WIDTH + 'px'
    });
  };

  /**
   * Heartbeat method.  Gets called every frame.
   */
  fn.tick = function () {
    kd.tick();
    this.trigger('render');
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

  /**
   * @param {string} event
   * @param {Function} handler
   * @param {Object} canvas
   */
  fn.on = function (event, handler, canvas) {
    var events = this._events;
    if (typeof events[event] === 'undefined') {
      events[event] = [];
    }

    events[event].push({ handler: handler, canvas: canvas });
  };

  /**
   * @param {string} event
   */
  fn.trigger = function (event) {
    var events = this._events;
    if (typeof events[event] === 'undefined') {
      return;
    }

    events[event].forEach(function (eventObj) {
      eventObj.handler.call(eventObj.canvas);
    });
  };

  return Wrecked;
});

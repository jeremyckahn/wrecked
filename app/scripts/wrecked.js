define([

  'underscore'
  ,'keydrown'

  ,'constants'
  ,'tile'
  ,'actors/player'

], function (

  _
  ,kd

  ,constants
  ,Tile
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
    this.tile = new Tile();
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
    this.trigger('tick');
    this.trigger('render');
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

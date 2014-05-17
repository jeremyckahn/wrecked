define([

  'canvas-utils'
  ,'utils'

],function (

  canvasUtils
  ,utils

) {
  'use strict';

  /**
   * @param {Wrecked} wrecked
   * @constructor
   */
  function Actor (wrecked) {
    this.wrecked = wrecked;
    this.wrecked.on('render', this.render, this);
    this.wrecked.on('tick', this.tick, this);
  }
  var fn = Actor.prototype = Object.create(canvasUtils);

  /** @abstract */
  fn.tick = utils.noop;

  fn.moveLeft = function () {
    this.x -= this.velocity;
  };

  fn.moveRight = function () {
    this.x += this.velocity;
  };

  return Actor;
});

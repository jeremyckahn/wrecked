define([

  'underscore'

  ,'canvas-utils'
  ,'utils'

],function (

  _

  ,canvasUtils
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

    _.defaults(this, {
      x: 0
      ,y: 0
      ,velocityX: 5
    });
  }
  var fn = Actor.prototype = Object.create(canvasUtils);

  /** @abstract */
  fn.tick = utils.noop;

  fn.moveLeft = function () {
    this.x -= this.velocityX;
  };

  fn.moveRight = function () {
    this.x += this.velocityX;
  };

  return Actor;
});

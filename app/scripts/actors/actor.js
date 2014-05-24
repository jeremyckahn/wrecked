define([

  'underscore'

  ,'canvas-utils'
  ,'utils'
  ,'mixins/collision'

],function (

  _

  ,canvasUtils
  ,utils
  ,collision

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
      ,speedX: 5
      ,velocityY: 0
      ,jumpPower: 75
    });

    this.initCollision();
  }
  var fn = Actor.prototype = Object.create(canvasUtils);
  utils.mixin(fn, collision);

  fn.tick = function () {
    this.applyCollision();
  };

  fn.moveLeft = function () {
    this.x -= this.speedX;
  };

  fn.moveRight = function () {
    this.x += this.speedX;
  };

  fn.jump = function () {
    if (this.y === 0) {
      this.velocityY += this.jumpPower;
    }
  };

  return Actor;
});

define([

  'underscore'
  ,'keydrown'

  ,'utils'
  ,'mixins/canvas'
  ,'mixins/collision'

],function (

  _
  ,kd

  ,utils
  ,canvas
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
      ,velocityX: 0
      ,velocityY: 0
      ,jumpPower: 75
    });

    this.initCollision();
  }
  var fn  = Actor.prototype;
  utils.mixin(fn, canvas);
  utils.mixin(fn, collision);

  fn.tick = function () {
    // FIXME: This isn't a great way to determine whether or not to apply
    // velocityX, there may be other forces acting upon vX than user input.
    if (kd.A.isDown() || kd.D.isDown()) {
      this.x += this.velocityX;
    }

    this.applyCollision();
  };

  fn.moveLeft = function () {
    this.velocityX = -this.speedX;
  };

  fn.moveRight = function () {
    this.velocityX = this.speedX;
  };

  fn.jump = function () {
    if (this.y === 0) {
      this.velocityY += this.jumpPower;
    }
  };

  return Actor;
});

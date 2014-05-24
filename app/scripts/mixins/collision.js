define([

  'underscore'

], function (

  _

) {
  'use strict';

  var collision = {};

  collision.initCollision = function () {
    _.defaults(this, {
      x: 0
      ,y: 0
      ,velocityX: 0
      ,velocityY: 0
    });
  };

  collision.applyCollision = function () {
    this._applyGroundCollision();
  };

  collision._applyGroundCollision = function () {
    if (this.y < 0) {
      this._stopFall();
    }
  };

  collision._stopFall = function () {
    this.velocityY = 0;
    this.y = 0;
  };

  return collision;
});

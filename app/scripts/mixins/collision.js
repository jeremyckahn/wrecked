define([

  'underscore'

], function (

  _

) {
  'use strict';

  var collision = {};

  collision.initCollision = function () {
    this._collisionList = [];

    _.defaults(this, {
      x: 0
      ,y: 0
      ,velocityX: 0
      ,velocityY: 0
    });
  };

  /**
   * @param {Array.<Object>}objects
   */
  collision.addToCollisionList = function (objects) {
    this._collisionList = this._collisionList.concat(objects);
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

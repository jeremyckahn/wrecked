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

  collision.applyCollision = function () {
    this._applyGroundCollision();
    this._applyObjectCollision();
  };

  /**
   * @param {Array.<Object>}objects
   */
  collision.addToCollisionList = function (objects) {
    this._collisionList = this._collisionList.concat(objects);
  };

  /**
   * @param {{height: number, width: number, x: number, y: number}} otherObject
   * @return {boolean}
   */
  collision.isColliding = function (otherObject) {
    // http://gamedev.stackexchange.com/a/587
    return (
        Math.abs(this.x - otherObject.x) * 2
            <= (this.width + otherObject.width)) &&
       (Math.abs(this.y - otherObject.y) * 2
            <= (this.height + otherObject.height));
  };

  collision._applyObjectCollision = function () {
    this._collisionList.forEach(function (collidableObject) {
      if (this.isColliding(collidableObject)) {
        console.log('colliding');
      }
    }, this);
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

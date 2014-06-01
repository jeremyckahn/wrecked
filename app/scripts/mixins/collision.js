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
    this._applyBlockCollision();
  };

  /**
   * @param {Array.<Object>}objects
   */
  collision.addToCollisionList = function (objects) {
    this._collisionList = this._collisionList.concat(objects);
  };

  /**
   * @param {number}
   */
  function isIntersecting (point, i1, i2) {
    return (point > i1 && point < i2);
  }

  /**
   * @param {{height: number, width: number, x: number, y: number}} otherObject
   * @return {boolean}
   */
  collision.isColliding = function (otherObject) {
    return this.isCollidingHorizontally(otherObject) &&
           this.isCollidingVertically(otherObject);
  };

  /**
   * @param {{height: number, width: number, x: number, y: number}} otherObject
   * @return {boolean}
   */
  collision.isCollidingHorizontally = function (otherObject) {
    var thisRight = this.x + this.width;
    var otherObjectRight = otherObject.x + otherObject.width;

    return ((isIntersecting(thisRight, otherObject.x, otherObjectRight) ||
        isIntersecting(this.x, otherObject.x, otherObjectRight)) || (
          this.x <= otherObject.x && thisRight >= otherObjectRight));
  };

  /**
   * @param {{height: number, width: number, x: number, y: number}} otherObject
   * @return {boolean}
   */
  collision.isCollidingVertically = function (otherObject) {
    var thisTop = this.y + this.height;
    var otherObjectTop = otherObject.y + otherObject.height;

    return ((isIntersecting(thisTop, otherObject.y, otherObjectTop) ||
        isIntersecting(this.y, otherObject.y, otherObjectTop)) || (
          this.y <= otherObject.y && thisTop >= otherObjectTop));
  };

  // "Block collision" means that `this` cannot pass through the colliding
  // object.
  collision._applyBlockCollision = function () {
    this._collisionList.forEach(function (collidableObject) {
      while (this.isColliding(collidableObject)) {

        if (this.velocityY < 0) {
          this.y = collidableObject.y + collidableObject.height;
          this.velocityY = 0;
          continue;
        }

        if (this.velocityX > 0) {
          this.x = collidableObject.x - this.width;
          this.velocityX = 0;
          continue;
        }

        if (this.velocityX < 0) {
          this.x = collidableObject.x + collidableObject.width;
          this.velocityX = 0;
          continue;
        }

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

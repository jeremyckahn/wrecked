define(function () {
  'use strict';

  /**
   * @param {Wrecked} wrecked
   * @constructor
   */
  function Actor (wrecked) {
    this.wrecked = wrecked;
    this.wrecked.on('render', this.render, this);
  }
  var fn = Actor.prototype;

  fn.moveLeft = function () {
    this.x -= this.velocity;
  };

  fn.moveRight = function () {
    this.x += this.velocity;
  };

  return Actor;
});

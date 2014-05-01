define([

  'keydrown'

  ,'constants'

], function (

  kd

  ,constants

) {
  'use strict';

  /**
   * @param {Wrecked} wrecked
   * @constructor
   */
  function Player (wrecked) {
    this.wrecked = wrecked;
    this.layer = this.wrecked.createCanvas();
    this.layer.classList.add('player');
    this.layerContext = this.layer.getContext('2d');
    this.wrecked.injectCanvas(this.layer);
    this.x = 0;
    this.y = 0;
    this.velocity = 5;

    this.wrecked.on('render', this.render, this);
    kd.A.down(this.moveLeft.bind(this));
    kd.D.down(this.moveRight.bind(this));
  }
  var fn = Player.prototype;

  fn.render = function () {
    this.layer.width = this.layer.width;
    this.layerContext.fillStyle = constants.PLAYER_COLOR;
    this.layerContext.fillRect(
        this.x,
        this.y,
        constants.PLAYER_HEIGHT,
        constants.PLAYER_WIDTH);
  };

  fn.moveLeft = function () {
    this.x -= this.velocity;
  };

  fn.moveRight = function () {
    this.x += this.velocity;
  };

  return Player;
});

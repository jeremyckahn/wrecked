define([

  'keydrown'

  ,'constants'

  ,'actors/actor'

], function (

  kd

  ,constants

  ,Actor

) {
  'use strict';

  /**
   * @param {Wrecked} wrecked
   * @constructor
   * @extends {Actor}
   */
  function Player () {
    Actor.prototype.constructor.apply(this, arguments);
    this.layer = this.wrecked.createCanvas();
    this.layer.classList.add('player');
    this.layerContext = this.layer.getContext('2d');
    this.wrecked.injectCanvas(this.layer);
    this.x = 0;
    this.y = 0;
    this.velocity = 5;

    kd.A.down(this.moveLeft.bind(this));
    kd.D.down(this.moveRight.bind(this));
  }
  var fn = Player.prototype = Object.create(Actor.prototype);

  fn.render = function () {
    this.layer.width = this.layer.width;
    this.layerContext.fillStyle = constants.PLAYER_COLOR;
    this.layerContext.fillRect(
        this.x,
        this.y,
        constants.PLAYER_HEIGHT,
        constants.PLAYER_WIDTH);
  };

  return Player;
});

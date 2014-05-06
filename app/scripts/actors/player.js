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
    Actor.apply(this, arguments);
    this.createCanvas('player');
    this.injectCanvas();
    this.x = 0;
    this.y = 0;
    this.velocity = 5;

    kd.A.down(this.moveLeft.bind(this));
    kd.D.down(this.moveRight.bind(this));
  }
  var fn = Player.prototype = Object.create(Actor.prototype);

  fn.render = function () {
    this.clear();
    this.fillStyle(constants.PLAYER_COLOR);
    this.fillRect(
        this.x,
        this.y,
        constants.PLAYER_HEIGHT,
        constants.PLAYER_WIDTH);
  };

  return Player;
});

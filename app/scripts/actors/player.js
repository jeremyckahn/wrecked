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
    this.context = this.wrecked.createCanvas();
    this.context.classList.add('player');
    this.canvasContext = this.context.getContext('2d');
    this.wrecked.injectCanvas(this.context);
    this.x = 0;
    this.y = 0;
    this.velocity = 5;

    kd.A.down(this.moveLeft.bind(this));
    kd.D.down(this.moveRight.bind(this));
  }
  var fn = Player.prototype = Object.create(Actor.prototype);

  fn.render = function () {
    this.clear();
    this.canvasContext.fillStyle = constants.PLAYER_COLOR;
    this.fillRect(
        this.x,
        this.y,
        constants.PLAYER_HEIGHT,
        constants.PLAYER_WIDTH);
  };

  return Player;
});

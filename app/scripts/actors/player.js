define([

  'keydrown'

  ,'constants'
  ,'utils'
  ,'mixins/gravity'

  ,'actors/actor'

], function (

  kd

  ,constants
  ,utils
  ,gravity

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
    this.initCanvas('player');
    this.wrecked.injectCanvas(this.canvas);
    this.x = 0;
    this.y = 200;
    this.speedX = 5;

    kd.A.down(this.moveLeft.bind(this));
    kd.D.down(this.moveRight.bind(this));
    kd.SPACE.press(this.jump.bind(this));

    this.initGravity();
  }
  var fn = Player.prototype = Object.create(Actor.prototype);

  utils.mixin(fn, gravity);

  fn.render = function () {
    this.clear();
    this.fillStyle(constants.PLAYER_COLOR);
    this.fillRect(
        this.x,
        this.y,
        constants.PLAYER_HEIGHT,
        constants.PLAYER_WIDTH);
  };

  fn.tick = function () {
    this.applyGravity();
    Actor.prototype.tick.call(this);
  };

  return Player;
});

define([

  'constants'

], function (

  constants

) {
  'use strict';

  /**
   * @param {Game} game
   * @constructor
   */
  function Player (game) {
    this.game = game;
    this.layer = this.game.createCanvas();
    this.layer.classList.add('player');
    this.layerContext = this.layer.getContext('2d');
    this.game.injectCanvas(this.layer);
    this.render();
  }
  var fn = Player.prototype;

  fn.render = function () {
    this.layer.width = this.layer.width;
    this.layerContext.fillStyle = constants.PLAYER_COLOR;
    this.layerContext.fillRect(
        0,
        0,
        constants.PLAYER_HEIGHT,
        constants.PLAYER_WIDTH);
  };

  return Player;
});

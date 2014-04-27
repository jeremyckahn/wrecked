define(function () {
  'use strict';

  /**
   * @param {Game} game
   * @constructor
   */
  function Player (game) {
    this.game = game;
    this.layer = this.game.createCanvas();
    this.layer.classList.add('player');
    this.game.injectCanvas(this.layer);
  }

  return Player;
});

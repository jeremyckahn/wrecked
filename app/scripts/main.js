/*global require*/
require.config({
  baseUrl: './scripts'
  ,paths: {
    underscore: '../bower_components/underscore/underscore'
  }
});

require([

  'game'

], function (

  Game

) {
  'use strict';

  var game = new Game(document.getElementById('game'));
  console.log(window.game = game);
});

/*global require*/
require.config({
  baseUrl: './scripts'
  ,paths: {
    underscore: '../bower_components/underscore/underscore'
  }
});

require([

  'platformer'

], function (

  Platformer

) {
  'use strict';

  var platformer = new Platformer(document.getElementById('game'));
  console.log(window.platformer = platformer);
});

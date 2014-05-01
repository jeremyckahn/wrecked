/*global require*/
require.config({
  baseUrl: './scripts'
  ,paths: {
    underscore: '../bower_components/underscore/underscore'
    ,keydrown: '../bower_components/keydrown/dist/keydrown'
  }
});

require([

  'wrecked'

], function (

  Wrecked

) {
  'use strict';

  var wrecked = new Wrecked(document.getElementById('wrecked'));
  console.log(window.wrecked = wrecked);
});

define([

  'text!tiles/sandbox.json'

], function (

  sandbox

) {
  'use strict';

  function Tile () {}
  var fn = Tile.prototype;

  fn.map = {
    sandbox: JSON.parse(sandbox)
  };

  return Tile;
});

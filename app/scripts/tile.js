define([

  'utils'
  ,'mixins/canvas'
  ,'text!tiles/sandbox.json'

], function (

  utils
  ,canvas
  ,sandbox

) {
  'use strict';

  /**
   * @param {Wrecked} wrecked
   * @constructor
   */
  function Tile (wrecked) {
    this.wrecked = wrecked;
    this.initCanvas('tile');
    this.wrecked.injectCanvas(this.canvas);
    this._currentMap = '';

    this.map = {
      sandbox: JSON.parse(sandbox)
    };
  }
  var fn = Tile.prototype;
  utils.mixin(fn, canvas);

  /**
   * @param {string} mapName
   */
  fn.useMap = function (mapName) {
    this._currentMap = mapName;
  };

  return Tile;
});

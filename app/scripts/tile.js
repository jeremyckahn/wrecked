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
    this.render();
  };

  fn.render = function () {
    this.clear();
    var currentMap = this.map[this._currentMap];
    var tileHeight = currentMap.tileHeight;
    var tileWidth = currentMap.tileWidth;

    currentMap.tileMap.reverse().forEach(function (row, y) {
      row.forEach(function (tile, x) {
        renderFunctionMap[tile].call(
            this, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
      }, this);
    }, this);
  };

  var renderFunctionMap = {
    '0': utils.noop
    ,'1': function (x, y, w, h) {
      this.fillStyle('#00f');
      this.fillRect(x, y, w, h);
    }
  };

  return Tile;
});

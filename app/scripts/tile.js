define([

  'underscore'

  ,'utils'
  ,'mixins/canvas'
  ,'text!tiles/sandbox.json'

], function (

  _

  ,utils
  ,canvas
  ,sandbox

) {
  'use strict';

  var TILE_DEFAULT_ATTRIBUTES = {
    passable: true
  };

  /**
   * @param {Wrecked} wrecked
   * @constructor
   */
  function Tile (wrecked) {
    this.wrecked = wrecked;
    this.initCanvas('tile');
    this.wrecked.injectCanvas(this.canvas);
    this._currentMap = '';
    this._tileObjects = [];

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
    this.createTileObjects();
    this.render();
  };

  fn.render = function () {
    this.clear();
    var currentMap = this.map[this._currentMap];
    var tileHeight = currentMap.tileHeight;
    var tileWidth = currentMap.tileWidth;

    this._tileObjects.forEach(function (tileObject) {
      renderFunctionMap[tileObject.tile].call(
          this, tileObject.x, tileObject.y, tileWidth, tileHeight);
    }, this);
  };

  fn.createTileObjects = function () {
    // Remove any old tiles
    this._tileObjects.length = 0;

    var currentMap = this.map[this._currentMap];
    var tileHeight = currentMap.tileHeight;
    var tileWidth = currentMap.tileWidth;

    currentMap.tileMap.reverse().forEach(function (row, y) {
      row.forEach(function (tile, x) {
        var tileObject = {
          tile: tile
          ,x: x * tileWidth
          ,y: y * tileHeight
          ,width: tileWidth
          ,height: tileHeight
        };

        if (currentMap[tile]) {
          _.defaults(tileObject, currentMap[tile]);
        }

        _.defaults(tileObject, TILE_DEFAULT_ATTRIBUTES);

        this._tileObjects.push(tileObject);
      }, this);
    }, this);
  };

  fn.getImpassableTiles = function () {
    return _.where(this._tileObjects, { passable: false });
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

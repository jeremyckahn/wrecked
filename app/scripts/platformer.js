define([

  'underscore'

  ,'constants'

], function (

  _

  ,constants

) {
  'use strict';

  /**
   * @param {HTMLElement} containerEl
   * @constructor
   */
  function Platformer (containerEl) {
    this.containerEl = containerEl;
    this.setupDOM();
  }

  var proto = Platformer.prototype;

  proto.setupDOM = function () {
    _.extend(this.containerEl.style, {
      height: constants.VIEWPORT_HEIGHT + 'px'
      ,width: constants.VIEWPORT_WIDTH + 'px'
    });
  };

  return Platformer;
});

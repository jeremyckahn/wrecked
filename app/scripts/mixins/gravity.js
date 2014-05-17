define([

  'underscore'

  ,'constants'

], function (

  _

  ,constants

) {
  'use strict';

  var gravity = {};

  gravity.initGravity = function () {
    _.defaults(this, {
      y: 0
      ,velocityY: 0
      ,terminalVelocityY: 25
    });
  };

  gravity.applyGravity = function () {
    this.velocityY -= constants.GRAVITATIONAL_ACCELERATION;

    if (this.velocityY < -this.terminalVelocityY) {
      this.velocityY = -this.terminalVelocityY;
    }

    this.y += this.velocityY;

    if (this.y < 0) {
      this.y = 0;
    }
  };

  return gravity;
});

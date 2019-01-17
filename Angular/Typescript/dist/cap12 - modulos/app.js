"use strict";
exports.__esModule = true;
var starfighters_1 = require("./starfighters");
var base_ships_1 = require("./base-ships");
//Nova instância
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new starfighters_1.MillenniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + goodForTheJob(falcon));

import { MillenniumFalcon } from './starfighters';
import {Spacecraft, Containership} from './base-ships';

import * as _ from 'lodash'
console.log(_.pad("typescript Examples", 40, "="));
//Nova instância
let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();

let falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace();

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2;
console.log(`Is falcon good for the job? ${goodForTheJob (falcon)}`)
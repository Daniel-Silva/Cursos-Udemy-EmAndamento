import {Spacecraft, Containership} from './base-ships';

//Herança com extends
export class MillenniumFalcon extends Spacecraft implements Containership {
    
    cargoContainers: number;

    constructor(){
        super('hyperdrive');
        this.cargoContainers = 2;
    }

    //sobrecarga de métodos
    jumpIntoHyperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperspace();
        }else {
            console.log('Failed to jump into hyperspace')
        }
    }
}


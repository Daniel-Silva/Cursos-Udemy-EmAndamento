// Classes
class Spacecraft {
    constructor(public propulsor: string){};

    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`);
    }
}

let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();

//Herança com extends
class MillenniumFalcon extends Spacecraft implements Containership {
    
    constructor(){
        super('hyperdrive');
        this.cargoContainers = 2;
    }

    cargoContainers: number;

    //sobrecarga de métodos
    jumpIntoHyperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperspace();
        }else {
            console.log('Failed to jump into hyperspace')
        }
    }
}

let falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace();

//Interfaces
interface Containership {
    cargoContainers: number;
}

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2;

console.log(`Is falcon good for the job? ${goodForTheJob (falcon)}`)
// Classes
class Spacecraft {
    constructor(public propulsor: string){};

    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`);
    }
}

//Interfaces
interface Containership {
    cargoContainers: number;
}

export {
    Spacecraft,
    Containership
}
import { Concessionaria } from './concessionaria';
import { Moto } from './moto';
import { Carro } from './carro';


let carro = new Carro('Veloster', 3);

let moto = new Moto();
moto.acelerar();
console.log(moto);
console.log(carro);

let concessionaria = new Concessionaria("", []);
console.log(concessionaria.fornecerHorarioDeFuncionamento());
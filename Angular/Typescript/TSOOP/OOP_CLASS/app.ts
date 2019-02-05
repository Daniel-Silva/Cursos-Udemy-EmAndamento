import { Pessoa } from './pessoa';
import { Concessionaria } from './concessionaria';
import { Carro } from './carro';

/* --- CRIAR CARROS ---*/
let carroA = new Carro('Dodge Journey', 4);
let carroB = new Carro('Hyundai Veloster', 3);
let carroC = new Carro('Kia Cerato', 4)

/* --- MONTAR LISTA DE CARROS ---*/
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];
let concessionaria = new Concessionaria('Av.: Paulista', listaDeCarros);

/*--- EXIBIR A LISTA DE CARROS ---*/
//console.log(concessionaria.mostrarListaDeCarros());

/*--- COMPRAR CARRO ---*/
let cliente = new Pessoa('João', 'Veloster')

console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        //COMPRAR O CARRO
        cliente.comprarCarro(carro);
    }
})

console.log(cliente.dizerCarroQueTem());

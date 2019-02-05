"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1 = require("./pessoa");
var concessionaria_1 = require("./concessionaria");
var carro_1 = require("./carro");
/* --- CRIAR CARROS ---*/
var carroA = new carro_1.Carro('Dodge Journey', 4);
var carroB = new carro_1.Carro('Hyundai Veloster', 3);
var carroC = new carro_1.Carro('Kia Cerato', 4);
/* --- MONTAR LISTA DE CARROS ---*/
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new concessionaria_1.Concessionaria('Av.: Paulista', listaDeCarros);
/*--- EXIBIR A LISTA DE CARROS ---*/
//console.log(concessionaria.mostrarListaDeCarros());
/*--- COMPRAR CARRO ---*/
var cliente = new pessoa_1.Pessoa('João', 'Veloster');
console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //COMPRAR O CARRO
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());

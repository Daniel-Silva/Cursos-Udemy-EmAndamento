"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade += 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = '';
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferedio) {
        this.nome = nome;
        this.carroPreferido = carroPreferedio;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
/* --- CRIAR CARROS ---*/
var carroA = new Carro('Dodge Journey', 4);
var carroB = new Carro('Hyundai Veloster', 3);
var carroC = new Carro('Kia Cerato', 4);
/* --- MONTAR LISTA DE CARROS ---*/
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria('Av.: Paulista', listaDeCarros);
/*--- EXIBIR A LISTA DE CARROS ---*/
//console.log(concessionaria.mostrarListaDeCarros());
/*--- COMPRAR CARRO ---*/
var cliente = new Pessoa('João', 'Veloster');
console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //COMPRAR O CARRO
        console.log(carro);
    }
});
console.log(cliente.dizerCarroQueTem());

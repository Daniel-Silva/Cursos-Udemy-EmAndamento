"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concessionaria_1 = require("./concessionaria");
var moto_1 = require("./moto");
var carro_1 = require("./carro");
var carro = new carro_1.Carro('Veloster', 3);
var moto = new moto_1.Moto();
moto.acelerar();
console.log(moto);
console.log(carro);
var concessionaria = new concessionaria_1.Concessionaria("", []);
console.log(concessionaria.fornecerHorarioDeFuncionamento());

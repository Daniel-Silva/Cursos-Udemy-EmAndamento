"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DAO_1 = require("./DAO");
//import { PessoaDAO } from './pessoaDAO';
var pessoa_1 = require("./pessoa");
//import { ConcessionariaDAO } from './concessionariaDAO';
var concessionaria_1 = require("./concessionaria");
//let dao: ConcessionariaDAO = new ConcessionariaDAO()
var dao3 = new DAO_1.Dao();
var concessionaria = new concessionaria_1.Concessionaria('', []);
var dao4 = new DAO_1.Dao();
dao3.inserir(concessionaria);
dao4.remover(5);
//let daoPessoa = new PessoaDAO();
var pessoa = new pessoa_1.Pessoa('', '');
//daoPessoa.atualizar(pessoa);

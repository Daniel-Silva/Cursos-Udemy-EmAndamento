"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concessionariaDAO_1 = require("./concessionariaDAO");
var concessionaria_1 = require("./concessionaria");
var dao = new concessionariaDAO_1.ConcessionariaDAO();
var concessionaria = new concessionaria_1.Concessionaria('', []);
dao.inserir(concessionaria);

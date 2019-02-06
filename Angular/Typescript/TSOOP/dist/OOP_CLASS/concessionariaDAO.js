"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concessionaria_1 = require("./concessionaria");
var ConcessionariaDAO = /** @class */ (function () {
    function ConcessionariaDAO() {
        this.nomeTabela = 'TB_CONCESSIONARIA';
    }
    ConcessionariaDAO.prototype.inserir = function (object) {
        console.log('lógica de insert');
        return true;
    };
    ;
    ConcessionariaDAO.prototype.atualizar = function (object) {
        console.log('lógica update');
        return true;
    };
    ;
    ConcessionariaDAO.prototype.remover = function (id) {
        console.log('lógica delete');
        return new concessionaria_1.Concessionaria('', []);
    };
    ;
    ConcessionariaDAO.prototype.selecionar = function (id) {
        console.log('lógica select');
        return new concessionaria_1.Concessionaria('', []);
    };
    ;
    ConcessionariaDAO.prototype.selecionarTodos = function () {
        console.log('lógica select all');
        return [new concessionaria_1.Concessionaria('', [])];
    };
    return ConcessionariaDAO;
}());
exports.ConcessionariaDAO = ConcessionariaDAO;

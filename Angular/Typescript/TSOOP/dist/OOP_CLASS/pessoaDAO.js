"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1 = require("./pessoa");
var PessoaDAO = /** @class */ (function () {
    function PessoaDAO() {
        this.nomeTabela = 'TB_PESSOA';
    }
    PessoaDAO.prototype.inserir = function (object) {
        console.log('lógica de insert');
        return true;
    };
    ;
    PessoaDAO.prototype.atualizar = function (object) {
        console.log('lógica update');
        return true;
    };
    ;
    PessoaDAO.prototype.remover = function (id) {
        console.log('lógica delete');
        return new pessoa_1.Pessoa('', '');
    };
    ;
    PessoaDAO.prototype.selecionar = function (id) {
        console.log('lógica select');
        return new pessoa_1.Pessoa('', '');
    };
    ;
    PessoaDAO.prototype.selecionarTodos = function () {
        console.log('lógica select all');
        return [new pessoa_1.Pessoa('', '')];
    };
    return PessoaDAO;
}());
exports.PessoaDAO = PessoaDAO;

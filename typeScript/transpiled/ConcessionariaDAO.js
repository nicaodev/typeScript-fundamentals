"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
//Classe apenas para exercitar INTERFACES.
var ConcessionariaDAO = /** @class */ (function () {
    function ConcessionariaDAO() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDAO.prototype.inserir = function (object) {
        console.log('logica de insetir');
        return true;
    };
    ConcessionariaDAO.prototype.atualizar = function (object) {
        console.log('logica de atualizar');
        return true;
    };
    ConcessionariaDAO.prototype.remover = function (id) {
        console.log('logica de remover');
        return new Concessionaria_1.Concessionaria('', []);
    };
    ConcessionariaDAO.prototype.selecionar = function (id) {
        console.log('logica de selecionar');
        return new Concessionaria_1.Concessionaria('', []);
    };
    ConcessionariaDAO.prototype.selectionarTodos = function () {
        console.log('logica de selecionar TODOS');
        return [new Concessionaria_1.Concessionaria('', [])];
    };
    return ConcessionariaDAO;
}());

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaoGenerics = void 0;
var DaoGenerics = /** @class */ (function () {
    function DaoGenerics() {
        this.nomeTabela = '';
    }
    DaoGenerics.prototype.inserir = function (object) {
        console.log('logica de insetir');
        return true;
    };
    DaoGenerics.prototype.atualizar = function (object) {
        console.log('logica de atualizar');
        return true;
    };
    DaoGenerics.prototype.remover = function (id) {
        console.log('logica de remover');
        return Object();
    };
    DaoGenerics.prototype.selecionar = function (id) {
        console.log('logica de selecionar');
        return Object();
    };
    DaoGenerics.prototype.selectionarTodos = function () {
        console.log('logica de selecionar TODOS');
        return [Object()];
    };
    return DaoGenerics;
}());
exports.DaoGenerics = DaoGenerics;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teste_var = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carroComprado) {
        this.carro = carroComprado;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
exports.default = Pessoa;
exports.teste_var = 'Nicolas_exportado';

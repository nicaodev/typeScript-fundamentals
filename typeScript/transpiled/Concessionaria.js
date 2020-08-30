"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concessionaria = void 0;
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarCarrosDisponiveis = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
exports.Concessionaria = Concessionaria;

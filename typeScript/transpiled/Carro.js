"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro = /** @class */ (function () {
    function Carro(model, numPortas) {
        this.velocidade = 0;
        this.modelo = model;
        this.numeroPortas = numPortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
exports.default = Carro;

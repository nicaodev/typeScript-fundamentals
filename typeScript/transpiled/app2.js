"use strict";
var Carro = /** @class */ (function () {
    function Carro(model, numPortas, velocidade) {
        this.velocidade = 0;
        this.modelo = model;
        this.numeroPortas = numPortas;
        this.velocidade = velocidade;
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
// let carroA = new Carro('BMW', 4, 15);
// console.log(carroA);
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco) {
        this.endereco = endereco;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarCarrosDisponiveis = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var con = new Concessionaria('Avenida Paulista');
console.log(con);

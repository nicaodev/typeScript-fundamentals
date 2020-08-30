"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_4 = __importDefault(require("./Carro"));
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = __importDefault(require("./Pessoa")); //Formas de importar. Pessoa está importada diretamente por ser 'default' na classe.
var Carro_1 = new Carro_4.default('Bmw', 4);
var Carro_2 = new Carro_4.default('Onix', 4);
var Carro_3 = new Carro_4.default('Dodge', 4);
var listaDeCarros = [Carro_1, Carro_2, Carro_3];
var concessionaria = new Concessionaria_1.Concessionaria('Av Paulista', listaDeCarros);
// Comprar carro
var cliente = new Pessoa_1.default('Nicolas Alexandre', 'Bmw');
console.log('preferido: ', cliente.dizerCarroPreferido());
concessionaria.mostrarCarrosDisponiveis().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log('Comprou qual carro? ', cliente.dizerCarroQueTem());
// console.log(teste);

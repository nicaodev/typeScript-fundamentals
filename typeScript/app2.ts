import Carro from "./Carro";
import { Concessionaria } from "./Concessionaria";
import Pessoa, { teste_var as teste } from "./Pessoa"; //Formas de importar. Pessoa está importada diretamente por ser 'default' na classe.

let Carro_1 = new Carro('Bmw', 4);
let Carro_2 = new Carro('Onix', 4);
let Carro_3 = new Carro('Dodge', 4);

let listaDeCarros: Array<Carro> = [Carro_1, Carro_2, Carro_3];

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

// Comprar carro

let cliente = new Pessoa('Nicolas Alexandre', 'Bmw');

console.log('preferido: ', cliente.dizerCarroPreferido());

concessionaria.mostrarCarrosDisponiveis().map((carro: Carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});

console.log('Comprou qual carro? ', cliente.dizerCarroQueTem());
// console.log(teste);
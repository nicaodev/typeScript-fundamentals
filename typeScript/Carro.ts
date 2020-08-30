import Veiculo from "./Veiculo";

export default class Carro extends Veiculo {
    private numeroPortas: number; // Especialização da Classe.

    constructor(modelo: string, numPortas: number) {
        super()
        this.modelo = modelo;
        this.numeroPortas = numPortas;
    }

}
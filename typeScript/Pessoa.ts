import Carro from "./Carro";

export default class Pessoa {
    private nome: string;
    private carroPreferido: string;
    private carro: any

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    public dizerNome(): string {
        return this.nome;
    }
    public dizerCarroPreferido(): string {
        return this.carroPreferido;
    }
    public comprarCarro(carroComprado: Carro): void {
        this.carro = carroComprado
    }
    public dizerCarroQueTem(): Carro {
        return this.carro;
    }
}

export let teste_var = 'Nicolas_exportado';
import Carro from "./Carro"; // export default no carro

export class Concessionaria {
    private endereco: string;
    private listaDeCarros: Carro[];

    constructor(endereco: string, listaCarros: Array<Carro>) {
        this.endereco = endereco;
        this.listaDeCarros = listaCarros;
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }
    public mostrarCarrosDisponiveis(): Array<Carro> {
        return this.listaDeCarros;
    }
}
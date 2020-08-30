import Carro from "./Carro"; // export default no carro
import { IConcessionaria } from "./IConcessionaria";

export class Concessionaria implements IConcessionaria {
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

    public fornecerHorariosDeFuncionamento(): string {
        return 'De segunda a sexta das 08:00 as 16:00';
    }
}
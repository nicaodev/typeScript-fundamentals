export default class Carro {
    private modelo: string;
    private numeroPortas: number;
    private velocidade: number = 0;

    constructor(model: string, numPortas: number) {
        this.modelo = model;
        this.numeroPortas = numPortas;
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10;
    }

    public parar(): void {
        this.velocidade = 0;
    }

    public velocidadeAtual(): number {
        return this.velocidade;
    }
}
class Carro {
    private modelo: string;
    private numeroPortas: number;
    private velocidade: number = 0;

    constructor(model: string, numPortas: number, velocidade: number) {
        this.modelo = model;
        this.numeroPortas = numPortas;
        this.velocidade = velocidade;
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

// let carroA = new Carro('BMW', 4, 15);
// console.log(carroA);

class Concessionaria {
    private endereco: string;
    private listaDeCarros: any

    constructor( endereco: string){
        this.endereco = endereco;
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }
    public mostrarCarrosDisponiveis(): any {
        return this.listaDeCarros;
    }
}

let con = new Concessionaria('Avenida Paulista');
console.log(con);

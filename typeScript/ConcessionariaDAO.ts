import { IDAO } from "./IDAO";
import { Concessionaria } from "./Concessionaria";

//Classe apenas para exercitar INTERFACES.

class ConcessionariaDAO implements IDAO {
    nomeTabela = 'tb_concessionaria';

    inserir(object: Concessionaria): boolean {
        console.log('logica de insetir');
        return true;
    }

    atualizar(object: Concessionaria): boolean {
        console.log('logica de atualizar');
        return true;
    }
    remover(id: number): Concessionaria {
        console.log('logica de remover');
        return new Concessionaria('', []);
    }
    selecionar(id: number): Concessionaria {
        console.log('logica de selecionar');
        return new Concessionaria('', []);
    }
    selectionarTodos(): [any] {
        console.log('logica de selecionar TODOS');
        return [new Concessionaria('', [])];
    }

}
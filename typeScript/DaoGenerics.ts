import { IDAO } from "./IDAO";
import { Concessionaria } from "./Concessionaria";

export class DaoGenerics<T> implements IDAO<T>{
    nomeTabela = '';

    inserir(object: T): boolean {
        console.log('logica de insetir');
        return true;
    }

    atualizar(object: T): boolean {
        console.log('logica de atualizar');
        return true;
    }
    remover(id: number): T {
        console.log('logica de remover');
        return  Object();
    }
    selecionar(id: number): T {
        console.log('logica de selecionar');
        return Object();
    }
    selectionarTodos(): [T] {
        console.log('logica de selecionar TODOS');
        return [Object()];
    }
}
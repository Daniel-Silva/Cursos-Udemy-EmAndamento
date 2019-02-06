import { Concessionaria } from './concessionaria';
import { DAOInterface } from './DAOinterface';


export class ConcessionariaDAO implements DAOInterface {
    nomeTabela: string = 'TB_CONCESSIONARIA'

    inserir(object: Concessionaria): boolean {
        console.log('lógica de insert')
        return true
    };
    atualizar(object: Concessionaria): boolean {
        console.log('lógica update')
        return true
    };
    remover(id: number): Concessionaria {
        console.log('lógica delete')
        return new Concessionaria('', []);
    };
    selecionar(id: number): Concessionaria {
        console.log('lógica select')
        return new Concessionaria('', []);
    };
    selecionarTodos(): [Concessionaria] {
        console.log('lógica select all')
        return [new Concessionaria('', [])]
    }
}
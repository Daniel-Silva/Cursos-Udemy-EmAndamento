import { Pessoa } from './pessoa';
import { DAOInterface } from './DAOinterface';


export class PessoaDAO implements DAOInterface {
    nomeTabela: string = 'TB_PESSOA'

    inserir(object: Pessoa): boolean {
        console.log('lógica de insert')
        return true
    };
    atualizar(object: Pessoa): boolean {
        console.log('lógica update')
        return true
    };
    remover(id: number): Pessoa {
        console.log('lógica delete')
        return new Pessoa('', '');
    };
    selecionar(id: number): Pessoa {
        console.log('lógica select')
        return new Pessoa('', '');
    };
    selecionarTodos(): [Pessoa] {
        console.log('lógica select all')
        return [new Pessoa('', '')]
    }
}
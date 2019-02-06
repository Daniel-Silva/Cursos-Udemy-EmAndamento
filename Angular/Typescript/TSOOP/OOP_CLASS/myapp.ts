import { PessoaDAO } from './pessoaDAO';
import { Pessoa } from './pessoa';
import { ConcessionariaDAO } from './concessionariaDAO';
import { Concessionaria } from './concessionaria';

let dao: ConcessionariaDAO = new ConcessionariaDAO()
let concessionaria =  new Concessionaria('', [])

dao.inserir(concessionaria);


let daoPessoa = new PessoaDAO();
let pessoa = new Pessoa('', '')

daoPessoa.atualizar(pessoa);
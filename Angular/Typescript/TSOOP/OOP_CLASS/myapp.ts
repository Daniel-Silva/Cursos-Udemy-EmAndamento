import { Dao } from './DAO';
//import { PessoaDAO } from './pessoaDAO';
import { Pessoa } from './pessoa';
//import { ConcessionariaDAO } from './concessionariaDAO';
import { Concessionaria } from './concessionaria';

//let dao: ConcessionariaDAO = new ConcessionariaDAO()
let dao3: Dao<Concessionaria> = new Dao<Concessionaria>();
let concessionaria =  new Concessionaria('', [])
let dao4: Dao<Pessoa> = new Dao<Pessoa>();
dao3.inserir(concessionaria);
dao4.remover(5);


//let daoPessoa = new PessoaDAO();
let pessoa = new Pessoa('', '')

//daoPessoa.atualizar(pessoa);
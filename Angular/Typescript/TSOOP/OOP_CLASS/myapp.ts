import { ConcessionariaDAO } from './concessionariaDAO';
import { Concessionaria } from './concessionaria';

let dao: ConcessionariaDAO = new ConcessionariaDAO()
let concessionaria =  new Concessionaria('', [])

dao.inserir(concessionaria);
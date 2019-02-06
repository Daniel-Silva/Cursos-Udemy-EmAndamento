import { ConcessionariaInterface } from './concessionaria.interface';
import { Carro } from './carro';


export class Concessionaria implements ConcessionariaInterface {
    private endereco: string = ''
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }
    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros;
    }

    public fornecerHorarioDeFuncionamento(): string {
        return 'De seg a sex das 08:00 às 18:00 e sáb das 08:00 às 12:00';
    }
}
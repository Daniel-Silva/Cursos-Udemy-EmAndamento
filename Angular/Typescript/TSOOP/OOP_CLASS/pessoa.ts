import { Carro } from './carro';

export class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro!: Carro

    constructor(nome: string, carroPreferedio: string) {
        this.nome = nome
        this.carroPreferido = carroPreferedio
    }
    public dizerNome(): string {
        return this.nome;
    }
    public dizerCarroPreferido(): string {
        return this.carroPreferido;
    }
    public comprarCarro(carro: Carro): void {
        this.carro = carro;
    }
    public dizerCarroQueTem(): Carro {
        return this.carro;
    }
}
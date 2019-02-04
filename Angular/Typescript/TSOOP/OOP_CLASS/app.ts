class Carro {
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroDePortas: number){
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }

    public acelerar(): void {
        this.velocidade += 10;
    }
    public parar(): void {
        this.velocidade = 0;
    }
    public velocidadeAtual(): number {
        return this.velocidade;
    }
}

class Concessionaria {
    private endereco: string = ''
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }
    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros;
    }
}

class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: Carro

    constructor(nome: string, carroPreferedio: string){
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

/* --- CRIAR CARROS ---*/
let carroA = new Carro('Dodge Journey', 4);
let carroB = new Carro('Hyundai Veloster', 3);
let carroC = new Carro('Kia Cerato', 4)

/* --- MONTAR LISTA DE CARROS ---*/
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];
let concessionaria = new Concessionaria('Av.: Paulista', listaDeCarros);

/*--- EXIBIR A LISTA DE CARROS ---*/
//console.log(concessionaria.mostrarListaDeCarros());

/*--- COMPRAR CARRO ---*/
let cliente = new Pessoa('João', 'Veloster')

console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        //COMPRAR O CARRO
        console.log(carro)
    }
})

console.log(cliente.dizerCarroQueTem());
//Funções
let isEnoughToBeatMF = function  (parsecs: number/*parâmetros por tipo*/): boolean/*tipo do retorno */ {
    return parsecs < 12;
}

let distance = 11;

console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`);

// Arrow functions
let call = (name: string) => console.log(`Do you copy, ${name}?`);
call('R2');

//Parâ,etros padrões
function inc (speed: number, inc: number = 1): number {
    return speed + inc;
}

console.log(`inc (5,1) = ${inc(5,1)}`);
console.log(`inc (5) = ${inc(5)}`);

//Cálculo de IMC com funções
let peso: number, altura: number;

let getPeso = function (peso: number): number {
    peso = peso;
    return peso;
}

let getAltura = function(altura: number): number {
    altura = altura;
    return altura * altura;
}

let imc = function(peso: number, altura: number): void{
    let calc = peso / altura
    console.log(calc.toFixed(2));
}

imc(getPeso(88), getAltura(1.80));


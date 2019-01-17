//Funções
var isEnoughToBeatMF = function (parsecs /*parâmetros por tipo*/) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
// Arrow functions
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
//Parâ,etros padrões
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5,1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
//Cálculo de IMC com funções
var peso, altura;
var getPeso = function (peso) {
    peso = peso;
    return peso;
};
var getAltura = function (altura) {
    altura = altura;
    return altura * altura;
};
var imc = function (peso, altura) {
    var calc = peso / altura;
    console.log(calc.toFixed(2));
};
imc(getPeso(88), getAltura(1.80));

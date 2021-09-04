/*
 - Código do curso de Lógica: 04/09/2021
 - Programador: Eric Tomson
*/

var nome = "Renato Oliveira";
var peso = 76.00;
var altura = 1.78;
var imc = peso / (altura**2); // imc

console.log(nome);
console.log(`Peso: ${peso} - Altura: ${altura}`); //string template
console.log(`Cálculo do IMC: ${imc.toFixed(2)}`);
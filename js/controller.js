/*
 - Código do curso de Lógica: 04/09/2021
 - Programador: Eric Tomson
*/

var botao = document.getElementById("calcular");
botao.addEventListener("click", function() {
                                    var paciente = lePaciente();
                                    mostraPaciente(paciente);
                                });

// console.log(nome);
// console.log(`Peso: ${peso} - Altura: ${altura}`); //string template
// console.log(`Cálculo do IMC: ${imc.toFixed(2)}`);
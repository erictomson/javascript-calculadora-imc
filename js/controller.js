/*
 - Código do curso de Lógica: 04/09/2021
 - Programador: Eric Tomson
*/
var pacientes = [];
var botao = document.getElementById("calcular");
botao.addEventListener("click", function() {
                                    var paciente = lePaciente();
                                    pacientes.push(paciente);
                                    mostraPaciente(paciente);
                                });

var botaoRelatorio = document.getElementById("relatorio");
botaoRelatorio.addEventListener("click", function() {
                                            geraRelatorio(pacientes);
                                        });

// console.log(nome);
// console.log(`Peso: ${peso} - Altura: ${altura}`); //string template
// console.log(`Cálculo do IMC: ${imc.toFixed(2)}`);
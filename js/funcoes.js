function calculaIMC(peso, altura) {
    var imc = peso / (altura**2); // imc
    return imc;
}

function verificaIMC(imc) {
    if (imc < 18.5) {
        situacao = "Magreza";
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = "Normal";
    } else if (imc >= 24.9 && imc <= 30) {
        situacao = "Sobrepeso";
    } else {
        situacao = "Obesidade";
    }
    return situacao;
}

function mostraPaciente (nomePaciente, pesoPaciente, alturaPaciente) {
    //Chamando as funções para os cálculos
    var imc = calculaIMC(pesoPaciente, alturaPaciente);
    var situacao = verificaIMC(imc);
    //altera o DOM
    var elNome = document.getElementById("nome");
    elNome.innerHTML = nomePaciente;
    var elPeso = document.getElementById("peso");
    elPeso.innerHTML = pesoPaciente;
    var elAltura = document.getElementById("altura");
    elAltura.innerHTML = alturaPaciente;
    //calculo
    var elImc = document.getElementById("imc");
    elImc.innerHTML = imc.toFixed(2);
    var elSituacao = document.getElementById("situacao");
    elSituacao.innerHTML = situacao;
}
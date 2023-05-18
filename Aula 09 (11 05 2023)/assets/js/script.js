/*
document.getElementById("animal").innerHTML = "Cachorro";
document.getElementById("carro").innerHTML = "Fiat Uno";
document.getElementById("disciplina").innerHTML = "Matemática";
document.getElementById("produto").innerHTML = "Celular";
document.getElementById("mae").innerHTML = "Ana";

function exibirNome(){
    var nome = document.getElementById("nome").value;
    var recebeNome = document.getElementById("recebeNome").innerHTML = nome;
    document.getElementById("nome").value = "";
}
*/

function calculadora() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var operacao = document.getElementById("operacao").value;
    var resultado = 0;
    if (operacao == "+") {
        resultado = num1 + num2;
    } else if (operacao == "-") {
        resultado = num1 - num2;
    } else if (operacao == "*") {
        resultado = num1 * num2;
    } else if (operacao == "/") {
        resultado = num1 / num2;
    }
    document.getElementById("resultado").value = resultado;
}
/* function validarNome(){
    alert('Você saiu do input nome!')
}

function validarCadastro(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var repeteSenha = document.getElementById('repeteSenha').value;

    if(nome == ""){
        document.getElementById('erro-nome').innerHTML = "Ops! Preencha esse campo para continuar!!";
        document.getElementById('nome').focus();
        return false;
    }
    else{
        document.getElementById('erro-nome').innerHTML = "";
       // document.getElementById('nome').value=''; // Limpa o campo
    }


    if(email == ""){
        document.getElementById('erro-email').innerHTML = "Ops! Preencha esse campo para continuar!!";
        document.getElementById('email').focus();
    }
    else{
        document.getElementById('erro-email').innerHTML = "";
        // document.getElementById('email').value=''; // Limpa o campo
    }
}

*/

function validarCadastro(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var repeteSenha = document.getElementById('repeteSenha').value;

    if(nome == ""){
        document.getElementById('erro-nome').innerHTML = "Ops! Informe o nome para continuar!";
        document.getElementById('nome').focus();
        return false;
    }else{
        document.getElementById('erro-nome').innerHTML = "";
       
    }
    
    if(email == ""){
        document.getElementById('erro-email').innerHTML = "Ops! Informe o email para continuar!";
        document.getElementById('email').focus();
        return false;
    }else{
        document.getElementById('erro-email').innerHTML = "";
    }

    if(senha == ""){
        document.getElementById('erro-senha').innerHTML = "Ops! Informe a senha para continuar!";
        document.getElementById('senha').focus();
        return false;
    }else{
        document.getElementById('erro-senha').innerHTML = "";
    }

    if(repeteSenha == ""){
        document.getElementById('erro-repeteSenha').innerHTML = "Ops! Informe o repete senha para continuar!";
        document.getElementById('repeteSenha').focus();
        return false;
    }else{
        if(senha != repeteSenha){
            document.getElementById('erro-repeteSenha').innerHTML = "Ops! Senhas não conferem!";
        }else{
            document.getElementById('erro-repeteSenha').innerHTML = "";
        }
    }
}

/**
 * MOSTRAR ERRO
 * FOCAR O NO INPUT 
 */
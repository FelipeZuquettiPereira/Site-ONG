document.getElementById(AdocaoPinguins).addEventListener("submit", function(e){
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").email;
    let idade = document.getElementById("idade").idade;

    if(nome.length < 3) return alert("Nome inválido(ter no mínimo 3 caracteres");

    document.getElementById("resultado").innerHTML = "Cadastro realizado legal!<br>" + "Nome: " + nome;

});123
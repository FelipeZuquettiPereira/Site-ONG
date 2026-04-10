document.getElementById(AdocaoPinguins).addEventListener("submit", function(e){
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let cpf = document.getElementById("cpf").value;
    let pet = document.querySelector("pet").value;
    let contato = document.getElementById("contato").value;
    let cidade = document.getElementById("cidade").value;
    let Moradia = document.querySelector("Moradia").value;
    let Quintal = document.querySelector("Quintal").value;
    let tempo_sozinho = document.getElementById("tempo_sozinho").value;
    let motivoAdoção = document.getElementById("motivoAdoção").value;
    let Termos = document.getElementById("Termos").checkef;

    if(nome.length < 3) return alert("Nome inválido(ter no mínimo 3 caracteres");
    if(!email.includes("@")) return alert("Email Inválido");
    if(idade < 18) return alert("Você não tem idade para adotar um pinguin");
    if(cpf.length < 11) return alert("cpf inválido");

    document.getElementById("resultado").innerHTML = "Dados enviados com sucesso meu nobre"


    console.log("resultado");
});
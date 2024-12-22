const form  = document.getElementById("form");
let pnome = ""
let snome = ""
let idade = 0;
let genero = ""
let cpf = ""
let email = ""
let formItens = {} // <-- Salvar todos os itens cadastrados


form.addEventListener("submit", (Event) => {
    Event.preventDefault();
    pnome = document.getElementById('pname').value;
    snome = document.getElementById("snome").value;
    idade = document.getElementById("idade").value;
    sex = document.getElementsByName('genero')
    cpf = document.getElementById('cpf').value;
    email = document.getElementById('email').value;
    sexo()

 formItens = {
        nome:pnome,
        sobrenome:snome,
        idade:idade,
        genero:genero,
        cpf:cpf,
        email:email,
    }
    window.confirm(`Olá ${pnome}! Você foi cadastrado com sucesso, aqui estão os seus dados: \n Nome - ${pnome} \n Sobrenome - ${snome} \n idade - ${idade} \n Genero - ${genero} \n cpf - ${cpf} \n email - ${email}`)
  
})

function sexo() {
    if(sex[0].checked){
        genero = "masculino"
    } else if( sex[1].checked) {
        genero = "feminino"
    }
}
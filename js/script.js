const botaoSubmit = document.getElementById("cadastroId")

function validarFormulario() {
    const tudo = document.querySelectorAll("input[type='text'], input[type='email'], input[type='date']")
    console.log(tudo)
    console.log(tudo.length)
    let problema = ''
    for(let x = 0; x < tudo.length ; x++ ){
        if(tudo[x].value == ''){
            problema = problema + 'O CAMPO : ' + tudo[x].name + ' não foi preenchido!\n'
        }
    }
    if(problema != ''){
        alert(problema)
        return
    }
    if (problema == ''){
        alert('Cadastro realizado com sucesso!')
        document.querySelector(".campos").submit()
    }
}

botaoSubmit.addEventListener("click", validarFormulario)
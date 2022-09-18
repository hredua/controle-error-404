window.onload=() => {}

function cancelar() {
    document.getElementById('nomeUsuario').value = '';
    document.getElementById('senha').value = '';
}


async function entrar() {
    if(this.validaCampos() == true) {
        const response = await fetch('https://api-error404.herokuapp.com/usuario')
        let listaUsuario = await response.json()
        let nomeUsuario = document.querySelector('#nomeUsuario')
        let senha = document.querySelector('#senha')
        let msgError = document.querySelector('#msgError')
        let validaUsuario = {
            nome: '',
            nomeUsuario: '',
            senha: ''
        }
    
        listaUsuario.forEach((item) => {
            if(nomeUsuario.value == item.nomeUsuario && senha.value == item.senha){
                validaUsuario = {
                    nome: item.nome,
                    nomeUsuario: item.nomeUsuario,
                    senha: item.senha
                }
            }
        })
    
        if(nomeUsuario.value == validaUsuario.nomeUsuario && senha.value == validaUsuario.senha){
            window.location.href = "./admin.html"

            let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
            console.log(token)
            localStorage.setItem('token', token)

            localStorage.setItem('usuarioLogado', JSON.stringify(validaUsuario))
        }
        else{
            msgError.setAttribute('style', 'display: block')
            msgError.innerHTML = 'Usuário ou senha incorretos'
            nomeUsuario.focus()
        }
    
        cancelar()
    }
   
}

function validaCampos() {
    let nomeUsuario = document.querySelector('#nomeUsuario')
    let senha = document.querySelector('#senha')
    let msg = '';

    if(nomeUsuario.value == '') {
        msg += '- Informe o nome do usuário \n';
    }

    if(senha.value == '') {
        msg += '- Informe a senha \n';
    }

    if(msg != '') {
        alert(msg);
        return false
    }

    return true;

}

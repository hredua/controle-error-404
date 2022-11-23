window.onload=() => {
    menu()
}
function cancelar() {
    document.getElementById('nomeUsuario').value = '';
    document.getElementById('senha').value = '';
}



async function entrar() {
    if(this.validaCampos() == true) {
        let personagem = {
            "nomePersonagem": document.getElementById('nomeUsuario').value,
            "senha": document.getElementById('senha').value

        }
        var requestOptions = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(personagem)
        }
            const response = await fetch('https://api-error-404.vercel.app/auth/login/', requestOptions)
            const dados = await response.json()
            if(dados.token){
                localStorage.setItem('token', dados.token)
            localStorage.setItem('id', dados.id)
            }
            
    }
    logado()
}

async function logado() {
    let token = localStorage.getItem('token')
    let id = localStorage.getItem('id')
    if(token) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
        method: 'get',
        headers: myHeaders,
        redirect: 'follow'
        };
        const response = await fetch(`https://api-error-404.vercel.app/user/${id}`, requestOptions)
        let dados = await response.json()
        let usuario = {
            nome: dados.user.nome,
            nomePersonagem: dados.user.nomePersonagem
        }
        console.log(usuario)
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario))
        window.location.href = "./admin"
    } else {
        msgError.setAttribute('style', 'display: block')
            msgError.innerHTML = 'Usuário ou senha incorretos'
            nomeUsuario.focus()
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
function menu() {
    const menuSize = '270px';
  
    let open = false;
    
    document.querySelector('#btnMenu').addEventListener('click', e => {
        open = !open;
        toogleMenu()
    })
    function toogleMenu() {
      if(open) {
          document.querySelector('#menu').style.marginLeft = 0;
          return;
      }
    
      document.querySelector('#menu').style.marginLeft = `-${menuSize}`
    }
    
  }
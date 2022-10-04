function usuario() {
    let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))
  
    let logado = document.querySelector('#navText')
    let entraSai = document.querySelector('#entraSai')
    entraSai.setAttribute('style', 'cursor: pointer')
    logado.setAttribute('style', 'cursor: pointer')
  
    if(usuarioLogado == null){
      logado.innerHTML = 'Olá, Visitante'
      entraSai.innerHTML = "Entrar"
      entraSai.addEventListener('click', () => {
      window.location.href = "./login.html"
      })
    } else{
      logado.innerHTML = `Olá, ${usuarioLogado.nome}`
      entraSai.innerHTML = 'Sair'
      logado.addEventListener('click', () => {
        window.location.href = "./admin.html"
      })
    }
    if(entraSai.text == 'Sair'){
      entraSai.addEventListener('click', () => {
        window.location.href = "./index.html"
        localStorage.removeItem('token')
        localStorage.removeItem('usuarioLogado')
        localStorage.removeItem('id')
      } )
  
    }
  }
   export {usuario}
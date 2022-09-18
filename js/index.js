rankingCodex = async () => {
  const response = await fetch('https://apirestful-controle-personagem.herokuapp.com/personagem/')
  const dados = await response.json()
  let tbodyCodex = document.getElementById('tbodyCodex');
  let rank = 1;
  tbodyCodex.innerText = '';
  let codex = dados.sort(function (x, y){
    return y.codex - x.codex;
  });
  codex.forEach(codex => {
    let tr = tbodyCodex.insertRow();
                     
      let td_rank = tr.insertCell();
      let td_personagem = tr.insertCell();
      let td_codex = tr.insertCell();
    
      td_rank.innerText = rank++  
      td_personagem.innerText = codex.nomePersonagem;
      td_codex.innerText = codex.codex;
  })
}

rankingLevel = async () => {
  const response = await fetch('https://apirestful-controle-personagem.herokuapp.com/personagem/')
  const dados = await response.json()
  let tbodyLevel = document.getElementById('tbodyLevel');
  let rank = 1;
  tbodyLevel.innerText = '';
  let level = dados.sort(function (x, y){
    return y.level - x.level;
  });
  level.forEach(level => {
    let tr = tbodyLevel.insertRow();
                     
      let td_rank = tr.insertCell();
      let td_personagem = tr.insertCell();
      let td_level = tr.insertCell();
    
      td_rank.innerText = rank++  
      td_personagem.innerText = level.nomePersonagem;
      td_level.innerText = level.level;
  })
}

rankingPower = async () => {
  const response = await fetch('https://apirestful-controle-personagem.herokuapp.com/personagem/')
  const dados = await response.json()
  let tbodyPower = document.getElementById('tbodyPower');
  let rank = 1;
  tbodyPower.innerText = '';
  let power = dados.sort(function (x, y){
    return y.power - x.power;
  });
  power.forEach(power => {
    let tr = tbodyPower.insertRow();
                     
      let td_rank = tr.insertCell();
      let td_personagem = tr.insertCell();
      let td_level = tr.insertCell();
    
      td_rank.innerText = rank++  
      td_personagem.innerText = power.nomePersonagem;
      td_level.innerText = power.power;
  })
}


usuario = () => {
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
    } )

  }
}

window.onload= () => {


  rankingCodex()
  rankingLevel()
  rankingPower()
  usuario()
}
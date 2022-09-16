var _id = 1
class Player {

    constructor() {
        this.id = 1;
        this.arrayPlayers = [];
        this.editID = null;
        this.listaTabela();

    }

    salvar() {
       let personagem = this.lerDados();

       if(this.validaCampos(personagem) == true) {
            if(this.editID == null) {
                this.adicionar(personagem);
                    fetch('https://apirestful-controle-personagem.herokuapp.com/personagem/', {

                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(personagem)
                })
                window.setTimeout(function(){location.reload()},1000)
            } else {
                this.atualizar()
                window.setTimeout(function(){location.reload()},1000)
            }

       }

       this.listaTabela();
       this.cancelar();
    }

    listaTabela() {
        fetch('https://apirestful-controle-personagem.herokuapp.com/personagem/')
        .then( response => response.json())
        .then (data =>{
            let data1 = data.reverse()
          if(data1.length>0) {
              let tbody = document.getElementById('tbody');
              tbody.innerText = '';
              data.forEach((u)=>{
                      let tr = tbody.insertRow();
                     
                      let td_personagem = tr.insertCell();
                      let td_level = tr.insertCell();
                      let td_power = tr.insertCell();
                      let td_codex = tr.insertCell();
                      let td_acoes = tr.insertCell();
                  
    
                      td_personagem.innerText = u.nomePersonagem;
                      td_level.innerText = u.level;
                      td_power.innerText = u.power;
                      td_codex.innerText = u.codex;

                      let imgEdit = document.createElement('img');
                      imgEdit.src = './assets/editar.png';
                      imgEdit.addEventListener("click", () => {
                        this.editID = u._id
                        console.log(u._id)
                        document.getElementById('idReceived').value = this.editID;
                        document.getElementById('personagem').value = u.nomePersonagem;
                        document.getElementById('level').value = u.level;
                        document.getElementById('power').value = u.power;
                        document.getElementById('codex').value = u.codex;
                        document.getElementById('btn1').innerText = 'Atualizar';
                      } ) 

                      let imgDelete = document.createElement('img');
                      imgDelete.src = './assets/deletar-lixeira.png';
                      imgDelete.addEventListener("click", () => {
                        _id = u._id
                        var raw = "";

                        var requestOptions = {
                        method: 'DELETE',
                        body: raw,
                        redirect: 'follow'
                        };

                        fetch(`https://apirestful-controle-personagem.herokuapp.com/personagem/${_id}`, requestOptions)
                        .then(response => response.text())
                        .then(result => console.log(result))
                        .catch(error => console.log('error', error));
                        window.setTimeout(function(){location.reload()},1000)
                      } )
        
                      td_acoes.appendChild(imgEdit);
                      td_acoes.appendChild(imgDelete);


                     

              })
          }
        });
    }

    adicionar(personagem) {
        personagem.level = parseFloat(personagem.level)
        personagem.power = parseFloat(personagem.power)
        personagem.codex = parseFloat(personagem.codex)
        this.arrayPlayers.push(personagem);
        this.id++;
    }

   atualizar() {
    let personagem = this.lerDados();
    fetch('https://apirestful-controle-personagem.herokuapp.com/personagem/')
    .then( response => response.json())
    .then (data =>{
      let data1 = data.reverse()
      if(data1.length>0) {
          data.forEach((u)=>{
            const _id =  document.getElementById('idReceived').value
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: JSON.stringify(personagem),
                redirect: 'follow'
              };
              
              fetch(`https://apirestful-controle-personagem.herokuapp.com/personagem/${_id}`, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
          })
      }
    });
    }

    lerDados(){
        let personagem = {}

        personagem.id = this.id
        personagem.nomePersonagem = document.getElementById('personagem').value;
        personagem.level = document.getElementById('level').value;
        personagem.power = document.getElementById('power').value;
        personagem.codex = document.getElementById('codex').value;

        return personagem;
    }

    validaCampos(personagem) {
        let msg = '';

        if(personagem.nomePersonagem == '') {
            msg += '- Informe o nome do personagem \n';
        }

        if(personagem.level == '') {
            msg += '- Informe o level do personagem \n';
        }

        if(personagem.power == '') {
            msg += '- Informe o power do personagem \n';
        }

        if(personagem.codex == '') {
            msg += '- Informe o codex do personagem \n';
        }

        if(msg != '') {
            alert(msg);
            return false
        }

        return true;

    }

    cancelar() {
        document.getElementById('personagem').value = '';
        document.getElementById('level').value = '';
        document.getElementById('power').value = '';
        document.getElementById('codex').value = '';

        document.getElementById('btn1').innerText = 'Salvar';
        this.editID = null;
    
    }

}

var player = new Player();
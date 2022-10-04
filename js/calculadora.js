import { usuario } from './module/user.js';

function goldExpedition () {
    let fox = document.querySelector('#costFox')
    let deamon = document.querySelector('#costDeamon')
    let hell = document.querySelector('#costHell')
    let moon = document.querySelector('#costMoon')
    let abomination = document.querySelector('#costAbomination')
    let dragon = document.querySelector('#costDragon')
    let azure = document.querySelector('#costAzure')
    let total = document.querySelector('#total')
    let cancel = document.querySelector('#cancel')
    let foxCost = 0;
    let deamonCost = 0;
    let hellCost = 0;
    let moonCost = 0;
    let abominationCost = 0;
    let dragonCost = 0;
    let azureCost = 0;

    fox.addEventListener('click', () => {
        foxCost = 1000;
        total.value = foxCost + deamonCost + hellCost + moonCost + abominationCost + dragonCost + azureCost;
        fox.setAttribute('style', 'filter: grayscale(100%)')
    })
    deamon.addEventListener('click', () => {
        deamonCost = 1200;
        total.value = foxCost + deamonCost + hellCost + moonCost + abominationCost + dragonCost + azureCost;
        deamon.setAttribute('style', 'filter: grayscale(100%)')
    })
    hell.addEventListener('click', () => {
        hellCost = 1400;
        total.value = foxCost + deamonCost + hellCost + moonCost + abominationCost + dragonCost + azureCost;
        hell.setAttribute('style', 'filter: grayscale(100%)')
    })
    moon.addEventListener('click', () => {
        moonCost = 1600;
        total.value = foxCost + deamonCost + hellCost + moonCost + abominationCost + dragonCost + azureCost;
        moon.setAttribute('style', 'filter: grayscale(100%)')
    })
    abomination.addEventListener('click', () => {
        abominationCost = 1800;
        total.value = foxCost + deamonCost + hellCost + moonCost + abominationCost + dragonCost + azureCost;
        abomination.setAttribute('style', 'filter: grayscale(100%)')
    })
    dragon.addEventListener('click', () => {
        dragonCost = 2000;
        total.value = foxCost + deamonCost + hellCost + moonCost + abominationCost + dragonCost + azureCost;
        dragon.setAttribute('style', 'filter: grayscale(100%)')
    })
    azure.addEventListener('click', () => {
        azureCost = 2200;
        total.value = foxCost + deamonCost + hellCost + moonCost + abominationCost + dragonCost + azureCost;
        azure.setAttribute('style', 'filter: grayscale(100%)')
    })
    cancel.addEventListener('click', () => {
        fox.setAttribute('style', 'filter: grayscale(0)')
        deamon.setAttribute('style', 'filter: grayscale(0)')
        hell.setAttribute('style', 'filter: grayscale(0)')
        moon.setAttribute('style', 'filter: grayscale(0)')
        abomination.setAttribute('style', 'filter: grayscale(0)')
        dragon.setAttribute('style', 'filter: grayscale(0)')
        azure.setAttribute('style', 'filter: grayscale(0)')
        foxCost = 0;
        deamonCost = 0;
        hellCost = 0;
        moonCost = 0;
        abominationCost = 0;
        dragonCost = 0;
        azureCost = 0;
        total.value = '';
    })
}

function resourcesExpedition () {
    let foxDiv = document.querySelector('#foxImg')
    let deamonDiv = document.querySelector('#deamonImg')
    let hellDiv = document.querySelector('#hellImg')
    let moonDiv = document.querySelector('#redmoonImg')
    let abominationDiv = document.querySelector('#abominationImg')
    let dragonDiv = document.querySelector('#dragonImg')
    let azureDiv = document.querySelector('#azureImg')
    let totalCooper = document.querySelector('#totalCoop')
    let totalEnergy = document.querySelector('#totalEner')
    let totalDarksteel = document.querySelector('#totalDS')
    let totalStatues = document.querySelector('#totalStat')
    let cancel = document.querySelector('#cancelResoucers')
    let foxCooper = 0;
    let foxEnergy = 0;
    let foxDarksteel = 0;
    let foxStatues = 0;
    let deamonCooper = 0;
    let deamonEnergy = 0;
    let deamonDarksteel = 0;
    let deamonStatues = 0;
    let hellCooper = 0;
    let hellEnergy = 0;
    let hellDarksteel = 0;
    let hellStatues = 0;
    let moonCooper = 0;
    let moonEnergy = 0;
    let moonDarksteel = 0;
    let moonStatues = 0;
    let abominationCooper = 0;
    let abominationEnergy = 0;
    let abominationDarksteel = 0;
    let abominationStatues = 0;
    let dragonCooper = 0;
    let dragonEnergy = 0;
    let dragonDarksteel = 0;
    let dragonStatues = 0;
    let azureCooper = 0;
    let azureEnergy = 0;
    let azureDarksteel = 0;
    let azureStatues = 0;

    foxDiv.addEventListener('click', () => {
        foxCooper = 2500
        foxEnergy = 125000
        foxDarksteel = 125000
        foxStatues = 2
        totalCooper.value = foxCooper + deamonCooper + hellCooper + moonCooper + abominationCooper + dragonCooper + azureCooper
        totalEnergy.value = foxEnergy + deamonEnergy + hellEnergy + moonEnergy + abominationEnergy + dragonEnergy + azureEnergy;
        totalDarksteel.value = foxDarksteel + deamonDarksteel + hellDarksteel + moonDarksteel + abominationDarksteel + dragonDarksteel + azureDarksteel;
        totalStatues.value = foxStatues + deamonStatues + hellStatues + moonStatues + abominationStatues + dragonStatues + azureStatues;
        foxDiv.setAttribute('style', 'filter: grayscale(100%)')
    })
    deamonDiv.addEventListener('click', () => {
        deamonCooper = 5000;
        deamonEnergy = 250000
        deamonDarksteel = 250000
        deamonStatues = 4
        totalCooper.value = foxCooper + deamonCooper + hellCooper + moonCooper + abominationCooper + dragonCooper + azureCooper;
        totalEnergy.value = foxEnergy + deamonEnergy + hellEnergy + moonEnergy + abominationEnergy + dragonEnergy + azureEnergy;
        totalDarksteel.value = foxDarksteel + deamonDarksteel + hellDarksteel + moonDarksteel + abominationDarksteel + dragonDarksteel + azureDarksteel;
        totalStatues.value = foxStatues + deamonStatues + hellStatues + moonStatues + abominationStatues + dragonStatues + azureStatues;
        deamonDiv.setAttribute('style', 'filter: grayscale(100%)')
    })
    hellDiv.addEventListener('click', () => {
        hellCooper = 7500;
        hellEnergy = 375000
        hellDarksteel = 375000
        hellStatues = 6
        totalCooper.value = foxCooper + deamonCooper + hellCooper + moonCooper + abominationCooper + dragonCooper + azureCooper;
        totalEnergy.value = foxEnergy + deamonEnergy + hellEnergy + moonEnergy + abominationEnergy + dragonEnergy + azureEnergy;
        totalDarksteel.value = foxDarksteel + deamonDarksteel + hellDarksteel + moonDarksteel + abominationDarksteel + dragonDarksteel + azureDarksteel;
        totalStatues.value = foxStatues + deamonStatues + hellStatues + moonStatues + abominationStatues + dragonStatues + azureStatues;
        hellDiv.setAttribute('style', 'filter: grayscale(100%)')
    })
    moonDiv.addEventListener('click', () => {
        moonCooper = 10000;
        moonEnergy = 500000
        moonDarksteel = 500000
        moonStatues = 8
        totalCooper.value = foxCooper + deamonCooper + hellCooper + moonCooper + abominationCooper + dragonCooper + azureCooper;
        totalEnergy.value = foxEnergy + deamonEnergy + hellEnergy + moonEnergy + abominationEnergy + dragonEnergy + azureEnergy;
        totalDarksteel.value = foxDarksteel + deamonDarksteel + hellDarksteel + moonDarksteel + abominationDarksteel + dragonDarksteel + azureDarksteel;
        totalStatues.value = foxStatues + deamonStatues + hellStatues + moonStatues + abominationStatues + dragonStatues + azureStatues;
        moonDiv.setAttribute('style', 'filter: grayscale(100%)')
    })
    abominationDiv.addEventListener('click', () => {
        abominationCooper = 12500;
        abominationEnergy = 625000
        abominationDarksteel = 625000
        abominationStatues = 10
        totalCooper.value = foxCooper + deamonCooper + hellCooper + moonCooper + abominationCooper + dragonCooper + azureCooper;
        totalEnergy.value = foxEnergy + deamonEnergy + hellEnergy + moonEnergy + abominationEnergy + dragonEnergy + azureEnergy;
        totalDarksteel.value = foxDarksteel + deamonDarksteel + hellDarksteel + moonDarksteel + abominationDarksteel + dragonDarksteel + azureDarksteel;
        totalStatues.value = foxStatues + deamonStatues + hellStatues + moonStatues + abominationStatues + dragonStatues + azureStatues;
        abominationDiv.setAttribute('style', 'filter: grayscale(100%)')
    })
    dragonDiv.addEventListener('click', () => {
        dragonCooper = 15000;
        dragonEnergy = 750000
        dragonDarksteel = 750000
        dragonStatues = 12
        totalCooper.value = foxCooper + deamonCooper + hellCooper + moonCooper + abominationCooper + dragonCooper + azureCooper;
        totalEnergy.value = foxEnergy + deamonEnergy + hellEnergy + moonEnergy + abominationEnergy + dragonEnergy + azureEnergy;
        totalDarksteel.value = foxDarksteel + deamonDarksteel + hellDarksteel + moonDarksteel + abominationDarksteel + dragonDarksteel + azureDarksteel;
        totalStatues.value = foxStatues + deamonStatues + hellStatues + moonStatues + abominationStatues + dragonStatues + azureStatues;
        dragonDiv.setAttribute('style', 'filter: grayscale(100%)')
    })
    azureDiv.addEventListener('click', () => {
        azureCooper = 17500;
        azureEnergy = 875000
        azureDarksteel = 875000
        azureStatues = 14
        totalCooper.value = foxCooper + deamonCooper + hellCooper + moonCooper + abominationCooper + dragonCooper + azureCooper;
        totalEnergy.value = foxEnergy + deamonEnergy + hellEnergy + moonEnergy + abominationEnergy + dragonEnergy + azureEnergy;
        totalDarksteel.value = foxDarksteel + deamonDarksteel + hellDarksteel + moonDarksteel + abominationDarksteel + dragonDarksteel + azureDarksteel;
        totalStatues.value = foxStatues + deamonStatues + hellStatues + moonStatues + abominationStatues + dragonStatues + azureStatues;
        azureDiv.setAttribute('style', 'filter: grayscale(100%)')
    })
    cancel.addEventListener('click', () => {
        foxDiv.setAttribute('style', 'filter: grayscale(0)')
        deamonDiv.setAttribute('style', 'filter: grayscale(0)')
        hellDiv.setAttribute('style', 'filter: grayscale(0)')
        moonDiv.setAttribute('style', 'filter: grayscale(0)')
        abominationDiv.setAttribute('style', 'filter: grayscale(0)')
        dragonDiv.setAttribute('style', 'filter: grayscale(0)')
        azureDiv.setAttribute('style', 'filter: grayscale(0)')
        foxCooper = 0;
        foxEnergy = 0;
        foxDarksteel = 0;
        foxStatues = 0;
        deamonCooper = 0;
        deamonEnergy = 0;
        deamonDarksteel = 0;
        deamonStatues = 0;
        hellCooper = 0;
        hellEnergy = 0;
        hellDarksteel = 0;
        hellStatues = 0;
        moonCooper = 0;
        moonEnergy = 0;
        moonDarksteel = 0;
        moonStatues = 0;
        abominationCooper = 0;
        abominationEnergy = 0;
        abominationDarksteel = 0;
        abominationStatues = 0;
        dragonCooper = 0;
        dragonEnergy = 0;
        dragonDarksteel = 0;
        dragonStatues = 0;
        azureCooper = 0;
        azureEnergy = 0;
        azureDarksteel = 0;
        azureStatues = 0;
        totalCooper.value = '';
        totalEnergy.value = '';
        totalDarksteel.value = '';
        totalStatues.value = '';
    })
}

//async function donation (){
 //   const response = await fetch('https://apirestful-controle-personagem.herokuapp.com/personagem/')
  //  const dados = await response.json()
  //  let tbodyDonation = document.getElementById('tbodyDonation');
 //   tbodyDonation.innerText = '';
  //  let data = dados.sort(function (x, y){
  //      let a = x.nomePersonagem.toUpperCase(),
 //           b = y.nomePersonagem.toUpperCase();
 //       return a == b ? 0 : a > b ? 1 : -1;
 //   });
 //   data.forEach(personagem => {
 //     let tr = tbodyDonation.insertRow();
 //       let td_personagem = tr.insertCell();
//        let td_doacao = tr.insertCell();
 //       let td_doacaoMercado = tr.insertCell()
       
 //       td_personagem.innerText = personagem.nomePersonagem;
  //      let clan = document.createElement('input');
 //       clan.type = 'checkbox';
 //       let market = document.createElement('input', 'type=checkbox');
  //      market.type = 'checkbox';
  //      td_doacao.appendChild(clan);
  //      td_doacaoMercado.appendChild(market);
  //  })
 // }

window.onload= () => {
    goldExpedition ()
    resourcesExpedition ()
    usuario ()
}

function computerPlay(){
    let aux1 = Math.floor(Math.random()*3)+1;
    let aux2;
    if(aux1 == 1){
        aux2 = 'pedra';
    }
    else if(aux1 == 2){
        aux2 = 'papel';
    }
    else{
        aux2 = 'tesoura';
    }
    return aux2;
}

function rodada(){
    if(playerSelection == computerSelection){
        return 0;
    }
    else if(playerSelection == 'tesoura' && computerSelection == 'papel'){
        return 1;
    }
    else if(playerSelection == 'pedra' && computerSelection == 'tesoura'){
        return 1;
    }
    else if(playerSelection == 'papel' && computerSelection == 'pedra'){
        return 1;
    }
    else if(playerSelection == 'papel' && computerSelection == 'tesoura'){
        return 2;
    }
    else if(playerSelection == 'tesoura' && computerSelection == 'pedra'){
        return 2;
    }
    else if(playerSelection == 'pedra' && computerSelection == 'papel'){
        return 2;
    }
}

function game(){ 
    computerSelection = computerPlay();
    let resultado = rodada();
    
    if(resultado == 0){
        empate += 1;
    }
    else if(resultado == 1){
        pontuacaou += 1;
    }
    else if(resultado == 2){
        pontuacaoc += 1;
    }

    tela1.textContent = `Usuario: ${pontuacaou}`;
    tela2.textContent = `Computador: ${pontuacaoc}`;
    tela3.textContent = `Empate: ${empate}`;
    
    i++;
    if(i == 5){
        if(pontuacaoc > pontuacaou){
            tela4.textContent = 'Você perdeu!';
        }
        else if(pontuacaou > pontuacaoc){
            tela4.textContent = 'Você venceu!';
        }
        else{
            tela4.textContent = 'Empate!';
        }
    }
}

let playerSelection;

const pedra = document.querySelector('#pedra');
const papel = document.querySelector('#papel');
const tesoura = document.querySelector('#tesoura');

const result = document.querySelector('#resultado');

const tela1 = document.createElement('div');
tela1.classList.add('tela1');

const tela2 = document.createElement('div');
tela2.classList.add('tela2');

const tela3 = document.createElement('div');
tela2.classList.add('tela3');

const tela4 = document.createElement('div');
tela2.classList.add('tela4');

let computerSelection;
let pontuacaoc = 0;
let pontuacaou = 0;
let empate = 0;
let i = 0;

pedra.addEventListener('click', () => {
    playerSelection = 'pedra';
    game();
});

papel.addEventListener('click', () => {
    playerSelection = 'papel';
    game();
});

tesoura.addEventListener('click', () => {
    playerSelection = 'tesoura';
    game();
});

result.appendChild(tela1);
result.appendChild(tela2);
result.appendChild(tela3);
result.appendChild(tela4);
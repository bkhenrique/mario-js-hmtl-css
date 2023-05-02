const elementoInterativo = document; // aqui você pode selecionar o elemento interativo desejado
const pipe= document.querySelector('.pipe');
const mario = document.querySelector('.mario');
const finalGame = document.querySelector('.final-game');
const musicaGame = document.getElementById("musica-game");

const pontosElemento = document.getElementById("pontos"); // seleciona o elemento HTML que exibirá o placar
let pontos = 0; // variável para armazenar o placar inicialmente definido como zero
const btnReiniciarJogo = document.getElementById('reiniciar-jogo');
btnReiniciarJogo.addEventListener('click', reiniciarJogo);

// Recupera pontuação do storage e mostra na tela
let pontuacaoRecorde = document.querySelector('#pontuacao-recorde');
let getRecorde = localStorage.getItem('pontuacaoRecorde');
pontuacaoRecorde.textContent = getRecorde;

// Recupera nome do jogador do storage e mostra na tela
let areaRecorde = document.querySelector('#nome-jogador');
let nomeJogador = localStorage.getItem('nomeJogador');
areaRecorde.textContent = nomeJogador;


const btoAdicionarNome = document.querySelector('#reiniciar-jogo-recorde');
 btoAdicionarNome.addEventListener('click',function(){
  let nomeAdcionar = document.querySelector('#nome-jogador-inicio');//input 

 localStorage.setItem('nomeJogador', nomeAdcionar.value)

  let areaRecorde = document.querySelector('#nome-jogador');
  areaRecorde.textContent= nomeAdcionar.value;

  
  location.reload()
 });

function reiniciarJogo() {
location.reload()
}


function atualizarPlacar() {
  pontosElemento.textContent = pontos; // atualize o texto do elemento de placar
}

/**
 * jump - faz o pulo do personagem
 * @param {*} event pega faz algua coisa
 */
function jump(event) {
  const mario = document.querySelector('.mario'); // selecione o elemento que receberá a classe 'jump'
  if (event.type === 'keydown' && event.key === ' ') { // verifique se a tecla pressionada é a barra de espaço
    console.log('tecla pressionada: ' + event.key);
    mario.classList.add('jump');
    setTimeout(() => {
      mario.classList.remove('jump');
    }, 500); // agende a remoção da classe após 500 milissegundos
  } else if (event.type === 'touchstart') {
    mario.classList.add('jump');
    setTimeout(() => {
      mario.classList.remove('jump');
    }, 500); // agende a remoção da classe após 500 milissegundos
    console.log('toque na tela');
  }
}
//inicio do Game
let loop= setInterval(() => {
    const pipiPosition = pipe.offsetLeft;
    const marioPosition= +window.getComputedStyle(mario).bottom.replace('px','');
    
    //Valida a Colisão do perssonagem (Mario)
    if(pipiPosition <= 120 && pipiPosition > 0 && marioPosition < 80){

        pipe.style.animation ='nome';
        pipe.style.left = `${pipiPosition}px`;

        mario.style.animation ='nome';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/game-over.png';//troca imagem do perssonegem co a colisão
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        finalGame.src= './img/fina2.png';// troca imagem para game-over
        musicaGame.play(); // para tocar a música
        

        console.log(pontos);

        if(pontos > getRecorde ){
          localStorage.setItem('pontuacaoRecorde', pontos)

          let escondDados =document.querySelector('#coleta-dados-esconde');
          escondDados.classList.remove('hiden');
          
          
        };


       clearInterval(loop);
    } else {
      pontos++; // adiciona um ponto a cada iteração do loop enquanto o jogo continua
      atualizarPlacar(); // atualiza o placar
      console.log(pontos);

    }

},10);


elementoInterativo.addEventListener('keydown', jump);
elementoInterativo.addEventListener('touchstart', jump);


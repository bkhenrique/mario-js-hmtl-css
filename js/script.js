const elementoInterativo = document; // aqui você pode selecionar o elemento interativo desejado
const pipe= document.querySelector('.pipe');
const mario = document.querySelector('.mario');
const finalGame = document.querySelector('.final-game');
const musicaGame = document.getElementById("musica-game");


const pontosElemento = document.getElementById("pontos"); // seleciona o elemento HTML que exibirá o placar
let pontos = 0; // variável para armazenar o placar inicialmente definido como zero
const btnReiniciarJogo = document.getElementById('reiniciar-jogo');
btnReiniciarJogo.addEventListener('click', reiniciarJogo);
let pontuacaoRecorde = document.querySelector('#pontuacao-recorde');
let getRecorde = localStorage.getItem('pontuacaoRecorde');
pontuacaoRecorde.textContent = getRecorde;

function reiniciarJogo() {

location.reload()
}


function atualizarPlacar() {
  pontosElemento.textContent = pontos; // atualize o texto do elemento de placar
}

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

let loop= setInterval(() => {
    const pipiPosition = pipe.offsetLeft;
    const marioPosition= +window.getComputedStyle(mario).bottom.replace('px','');
    
    
    if(pipiPosition <= 120 && pipiPosition > 0 && marioPosition < 80){

        pipe.style.animation ='nome';
        pipe.style.left = `${pipiPosition}px`;

        mario.style.animation ='nome';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        finalGame.src= './img/fina2.png';
        musicaGame.play(); // para tocar a música
        

        console.log(pontos);

        if(pontos > getRecorde ){
          localStorage.setItem('pontuacaoRecorde', pontos)
          
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

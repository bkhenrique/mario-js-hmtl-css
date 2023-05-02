const elementoInterativo = document; // aqui você pode selecionar o elemento interativo desejado
const pipe= document.querySelector('.pipe');
const mario = document.querySelector('.mario');


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

const loop= setInterval(() => {
    const pipiPosition = pipe.offsetLeft;
    const marioPosition= +window.getComputedStyle(mario).bottom.replace('px','');

    if(pipiPosition <= 120 && pipiPosition >0 && marioPosition < 80){

        pipe.style.animation ='nome';
        pipe.style.left = `${pipiPosition}px`;

        mario.style.animation ='nome';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = '../img/game-over.png';
        mario.style.width ='75px';
        mario.style.marginLeft ='50px';
        

       clearInterval(loop);
    }

},10);

elementoInterativo.addEventListener('keydown', jump);
elementoInterativo.addEventListener('touchstart', jump);

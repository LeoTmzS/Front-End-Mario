const mario = document.querySelector('.mario'); /* Define o mario  */
const pipe = document.querySelector('.pipe'); /* Defino o cano (pipe) */

let score = 0;
let counted = false; // Controle para contar apenas uma vez por passagem

const scoreElement = document.createElement('div'); // Criando o Score Dinamicamente direto pelo JavaScript
scoreElement.style.position = 'absolute';
scoreElement.style.top = '';
scoreElement.style.left = '1.5rem';
scoreElement.style.bottom = '3rem';
scoreElement.style.fontSize = '2rem';
scoreElement.style.fontFamily = 'Arial';
scoreElement.style.color = '#FFFF00';  
scoreElement.innerText = `Score: ${score}`;
document.body.appendChild(scoreElement);


const jump = () => { /* Faz com que de para pular varias vezes com o mario */
    
    mario.classList.add('jump');

    setTimeout(() => { 
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => { /* Tira o texto do console para leitura (Usado na condicional) */

    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');    

    console.log(marioPosition);
    
    if (pipePosition < 100 && marioPosition < 70) { /* Condicional que verifica as posições do cano e mario para definir quando é game over  */

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./over.png"
        
        clearInterval(loop);

    }

    if (pipePosition < 50 && !counted) {
        score++;
        counted = true;
        scoreElement.innerText = `Score: ${score}`;
    }

    if (pipePosition < -50) {
        counted = false;
    }




}, 10)
 
document.addEventListener("click", jump); /* Click para pular, responsivo para mobile  */
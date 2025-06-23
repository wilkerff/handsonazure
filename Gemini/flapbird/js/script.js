// script.js

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let mario = new Image();
mario.src = 'path/to/mario_image.png'; // Substitua pelo caminho da imagem do Mario

let marioX = 50;
let marioY = canvas.height / 2;
let gravity = 0.5;
let lift = -10;
let velocity = 0;
let score = 0;
let isGameOver = false;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && !isGameOver) {
        velocity = lift;
    }
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(mario, marioX, marioY);
    marioY += velocity;
    velocity += gravity;

    if (marioY + mario.height >= canvas.height) {
        isGameOver = true;
    }

    if (!isGameOver) {
        requestAnimationFrame(draw);
    } else {
        ctx.font = '30px Arial';
        ctx.fillStyle = 'red';
        ctx.fillText('Game Over', canvas.width / 2 - 70, canvas.height / 2);
    }
}

function startGame() {
    marioY = canvas.height / 2;
    velocity = 0;
    score = 0;
    isGameOver = false;
    draw();
}

window.onload = function() {
    canvas.width = 400;
    canvas.height = 600;
    startGame();
};
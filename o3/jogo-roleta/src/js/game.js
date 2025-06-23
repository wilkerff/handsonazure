// game.js
const spinButton = document.getElementById('spinButton');
const resultDisplay = document.getElementById('result');
const canvas = document.getElementById('rouletteCanvas');
const ctx = canvas.getContext('2d');

let isSpinning = false;
let spinAngle = 0;
let spinSpeed = 0;
let spinDeceleration = 0.98; // Deceleration factor
let ballPosition = 0; // Position of the ball on the roulette
let ballSpeed = 0; // Speed of the ball

function startSpin() {
    if (isSpinning) return;
    isSpinning = true;
    spinSpeed = Math.random() * 10 + 10; // Random initial speed
    spinAngle = 0;
    resultDisplay.innerHTML = '';
    spinRoulette();
}

function spinRoulette() {
    if (spinSpeed > 0) {
        spinAngle += spinSpeed;
        spinSpeed *= spinDeceleration; // Apply deceleration
        drawRoulette();
        requestAnimationFrame(spinRoulette);
    } else {
        isSpinning = false;
        determineResult();
    }
}

function drawRoulette() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((spinAngle * Math.PI) / 180);
    
    // Draw the roulette segments
    for (let i = 0; i < 36; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, 250, (i * Math.PI) / 18, ((i + 1) * Math.PI) / 18);
        ctx.fillStyle = i % 2 === 0 ? '#FF0000' : '#000000';
        ctx.fill();
        ctx.stroke();
    }
    
    // Draw the ball
    ballPosition = (spinAngle % 360) * (36 / 360); // Calculate ball position
    ctx.beginPath();
    ctx.arc(0, -250, 10, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    
    ctx.restore();
}

function determineResult() {
    const resultIndex = Math.floor(ballPosition) % 36;
    resultDisplay.innerHTML = `Resultado: ${resultIndex}`;
}

spinButton.addEventListener('click', startSpin);
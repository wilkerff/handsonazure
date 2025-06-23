const canvas = document.getElementById('rouletteCanvas');
const ctx = canvas.getContext('2d');

let angle = 0;
let speed = 0;
let isSpinning = false;
let ballPosition = 0;

function drawRoulette() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(angle);

    // Draw the roulette wheel
    for (let i = 0; i < 36; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, 150, (i * Math.PI) / 18, ((i + 1) * Math.PI) / 18);
        ctx.fillStyle = (i % 2 === 0) ? '#FF0000' : '#000000';
        ctx.fill();
        ctx.stroke();
    }

    ctx.restore();
}

function drawBall() {
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.arc(0, -150, 10, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.restore();
}

function update() {
    if (isSpinning) {
        angle += speed;
        speed *= 0.99; // Simulate friction
        if (speed < 0.01) {
            speed = 0;
            isSpinning = false;
            determineResult();
        }
    }
    drawRoulette();
    drawBall();
    requestAnimationFrame(update);
}

function startSpin() {
    if (!isSpinning) {
        speed = Math.random() * 0.5 + 0.5; // Random initial speed
        isSpinning = true;
    }
}

function determineResult() {
    const resultIndex = Math.floor((angle / (Math.PI / 18)) % 36);
    alert(`Resultado: ${resultIndex}`);
}

document.getElementById('spinButton').addEventListener('click', startSpin);

update();
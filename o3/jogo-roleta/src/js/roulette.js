// roulette.js
const canvas = document.getElementById('rouletteCanvas');
const ctx = canvas.getContext('2d');

const segments = 12; // Number of segments in the roulette
const segmentAngle = (2 * Math.PI) / segments;
const colors = ['#FF0000', '#000000']; // Red and Black colors for segments
let angle = 0; // Current angle of the roulette
let spinAngle = 0; // Angle to spin
let spinning = false; // Is the roulette spinning?
let spinDuration = 3000; // Duration of the spin in milliseconds
let startTime;

// Draw the roulette
function drawRoulette() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(angle);

    for (let i = 0; i < segments; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, 250, i * segmentAngle, (i + 1) * segmentAngle);
        ctx.fillStyle = colors[i % 2];
        ctx.fill();
        ctx.stroke();
    }

    ctx.restore();
}

// Spin the roulette
function spinRoulette() {
    if (!spinning) {
        spinning = true;
        spinAngle = Math.random() * 360 + 720; // Random spin angle
        startTime = performance.now();
        requestAnimationFrame(animateSpin);
    }
}

// Animate the spin
function animateSpin(timestamp) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / spinDuration, 1);
    const easing = easeOutCubic(progress);
    
    angle += spinAngle * easing * (Math.PI / 180); // Convert degrees to radians

    drawRoulette();

    if (progress < 1) {
        requestAnimationFrame(animateSpin);
    } else {
        spinning = false;
        determineResult();
    }
}

// Easing function for smooth animation
function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

// Determine the result after spinning
function determineResult() {
    const finalAngle = angle % (2 * Math.PI);
    const segmentIndex = Math.floor((finalAngle + Math.PI / segments) / segmentAngle) % segments;
    const result = segmentIndex + 1; // Result is the segment number
    document.getElementById('result').innerText = `Resultado: ${result}`;
}

// Event listener for the spin button
document.getElementById('spinButton').addEventListener('click', spinRoulette);

// Initial draw
drawRoulette();
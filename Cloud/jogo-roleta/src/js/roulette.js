class Roulette {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
        this.radius = this.canvas.height / 2;
        this.angle = 0;
        this.speed = 0;
        this.isSpinning = false;
        this.bulletPosition = 0;
        this.bulletSpeed = 0;
        this.bulletFriction = 0.98; // Simula a resistência do ar
        this.bulletGravity = 0.1; // Simula a gravidade
        this.sectors = 36; // Número de setores na roleta
        this.init();
    }

    init() {
        this.drawRoulette();
        this.drawBullet();
    }

    drawRoulette() {
        const sectorAngle = (2 * Math.PI) / this.sectors;
        for (let i = 0; i < this.sectors; i++) {
            this.context.beginPath();
            this.context.moveTo(this.radius, this.radius);
            this.context.arc(this.radius, this.radius, this.radius, i * sectorAngle, (i + 1) * sectorAngle);
            this.context.fillStyle = i % 2 === 0 ? '#FF0000' : '#000000';
            this.context.fill();
            this.context.stroke();
        }
    }

    drawBullet() {
        this.context.beginPath();
        this.context.arc(this.radius, this.radius, 10, 0, 2 * Math.PI);
        this.context.fillStyle = '#FFFFFF';
        this.context.fill();
        this.context.stroke();
    }

    startSpin() {
        if (!this.isSpinning) {
            this.isSpinning = true;
            this.speed = Math.random() * 10 + 5; // Velocidade inicial aleatória
            this.animate();
        }
    }

    stopSpin() {
        this.isSpinning = false;
        this.speed = 0;
    }

    animate() {
        if (this.isSpinning) {
            this.angle += this.speed;
            this.speed *= 0.99; // Reduz a velocidade a cada frame
            this.angle %= (2 * Math.PI); // Mantém o ângulo dentro de 0 a 2π

            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.drawRoulette();
            this.drawBullet();

            this.bulletPosition += this.bulletSpeed;
            this.bulletSpeed += this.bulletGravity; // Acelera a bolinha pela gravidade
            this.bulletSpeed *= this.bulletFriction; // Aplica a resistência do ar

            requestAnimationFrame(() => this.animate());
        }
    }

    getResult() {
        const sectorAngle = (2 * Math.PI) / this.sectors;
        const resultIndex = Math.floor((this.angle / (2 * Math.PI)) * this.sectors) % this.sectors;
        return resultIndex;
    }
}
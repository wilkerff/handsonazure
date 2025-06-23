// physics.js
class Physics {
    constructor() {
        this.gravity = 9.81; // Aceleração devido à gravidade em m/s²
        this.friction = 0.05; // Coeficiente de atrito
    }

    // Calcula a nova velocidade da bolinha após um intervalo de tempo
    calculateVelocity(initialVelocity, time) {
        return initialVelocity - (this.gravity * time);
    }

    // Aplica a fricção à velocidade
    applyFriction(velocity) {
        return velocity * (1 - this.friction);
    }

    // Verifica se a bolinha deve parar
    isBallStopped(velocity) {
        return velocity <= 0;
    }
}
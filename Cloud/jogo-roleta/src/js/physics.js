function calculateRotationAngle(speed, time) {
    return speed * time; // Calcula o ângulo de rotação baseado na velocidade e no tempo
}

function calculateBallPosition(radius, angle) {
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y }; // Retorna a posição da bolinha em coordenadas cartesianas
}

function simulateRouletteRotation(roulette, ball, deltaTime) {
    const rotationSpeed = 2 * Math.PI / 5; // Velocidade de rotação em radianos por segundo
    const rotationAngle = calculateRotationAngle(rotationSpeed, deltaTime);
    
    roulette.rotation += rotationAngle; // Atualiza a rotação da roleta
    ball.angle += rotationSpeed * deltaTime; // Atualiza o ângulo da bolinha

    // Calcula a nova posição da bolinha
    const ballPosition = calculateBallPosition(roulette.radius, ball.angle);
    ball.x = ballPosition.x + roulette.centerX; // Atualiza a posição X da bolinha
    ball.y = ballPosition.y + roulette.centerY; // Atualiza a posição Y da bolinha
}
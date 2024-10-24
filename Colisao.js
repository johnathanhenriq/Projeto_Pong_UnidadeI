class Colisao {
    detectar(bola, barra) {
        // Verifica colisão entre a bola e a barra
        return bola.x - bola.radius < barra.x + barra.width &&
               bola.x + bola.radius > barra.x &&
               bola.y - bola.radius < barra.y + barra.height &&
               bola.y + bola.radius > barra.y;
    }

    detectarRecompensa(bola, recompensa) {
        // Calcula a distância entre o centro da bola e o centro da recompensa
        const dx = bola.x - recompensa.x;
        const dy = bola.y - recompensa.y;
        const distance = dist(bola.x, bola.y, recompensa.x, recompensa.y);

        // Verifica se a distância é menor que a soma dos raios (colisão)
        return distance < bola.radius + recompensa.radius;
    }
}

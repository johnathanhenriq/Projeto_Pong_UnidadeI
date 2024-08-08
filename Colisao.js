class Colisao {
    detectar(bola, barra) {
        return bola.x - bola.radius < barra.x + barra.width &&
               bola.x + bola.radius > barra.x &&
               bola.y + bola.radius > barra.y &&
               bola.y - bola.radius < barra.y + barra.height;
    }
}

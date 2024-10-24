class Recompensa {
    constructor(x, y, cor) {
        this.x = x;
        this.y = y;
        this.cor = cor;
        this.radius = 10; // Raio da recompensa
        this.speedX = 0.5; // Velocidade horizontal
        this.direcao = Math.random() > 0.5 ? 1 : -1; // Determina a direção inicial aleatoriamente

        // Ajusta a posição inicial com base na direção
        if (this.direcao === -1) {
            this.x = width - this.radius; // Inicia do lado direito
        } else {
            this.x = this.radius; // Inicia do lado esquerdo
        }
    }

    draw() {
        fill(this.cor); // Define a cor de preenchimento como a cor da recompensa
        noStroke(); // Remove o contorno
        ellipse(this.x, this.y, this.radius * 2); // Desenha a recompensa como um círculo
    }

    update() {
        this.x += this.speedX * this.direcao;

        // Remove a recompensa se sair da tela
        if ((this.direcao === 1 && this.x - this.radius > width) ||
            (this.direcao === -1 && this.x + this.radius < 0)) {
            return true; // Indica que a recompensa deve ser removida
        }
        return false; // Indica que a recompensa ainda está ativa
    }

    aplicar(barraEsquerda, barraDireita, pontuacao, lado) {
        // Método a ser sobrescrito pelas subclasses
    }
}

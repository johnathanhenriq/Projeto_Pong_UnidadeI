class Recompensa {
    constructor(x, y, canvas, cor) {
        this.x = x;
        this.y = y;
        this.canvas = canvas;
        this.cor = cor;
        this.radius = 10; // Raio da recompensa
        this.speedX = 0.5; // Velocidade horizontal
        this.direcao = Math.random() > 0.5 ? 1 : -1; // Determina a direção inicial aleatoriamente

        // Ajusta a posição inicial com base na direção
        if (this.direcao === -1) {
            this.x = canvas.width - this.radius; // Inicia do lado direito
        } else {
            this.x = this.radius; // Inicia do lado esquerdo
        }
    }

    draw(context, tipo) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.cor; // Cor da recompensa
        context.fill();
        context.closePath();
    }

    update() {
        this.x += this.speedX * this.direcao;

        // Remove a recompensa se sair da tela
        if ((this.direcao === 1 && this.x - this.radius > this.canvas.width) ||
            (this.direcao === -1 && this.x + this.radius < 0)) {
            return true; // Indica que a recompensa deve ser removida
        }
        return false; // Indica que a recompensa ainda está ativa
    }

    aplicar(barraEsquerda, barraDireita, pontuacao, lado) {
        // Método a ser sobrescrito pelas subclasses
    }
}
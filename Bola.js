class Bola {
    constructor(x, y, radius, mundo) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = 5;
        this.speedY = 5;
        this.mundo = mundo; // Referência ao mundo para gerar recompensas
    }

    draw() {
        fill(255); // Define a cor de preenchimento como branco
        noStroke(); // Remove o contorno
        ellipse(this.x, this.y, this.radius * 2); // Desenha a bola como um círculo
    }

    update(barraEsquerda, barraDireita, colisao, pontuacao) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.y + this.radius > height || this.y - this.radius < 0) {
            this.speedY = -this.speedY;
        }

        if (colisao.detectar(this, barraEsquerda) || colisao.detectar(this, barraDireita)) {
            this.speedX = -this.speedX;
        }

        if (this.x + this.radius > width) {
            pontuacao.incrementarEsquerda();
            this.reset('esquerda');
        }

        if (this.x - this.radius < 0) {
            pontuacao.incrementarDireita();
            this.reset('direita');
        }
    }

    reset(pontuador) {
        console.log('Reinicializando a bola...');
        this.x = width / 2;
        this.y = height / 2;
        this.speedX = 5 * (Math.random() > 0.5 ? 1 : -1); // Reinicia a velocidade horizontal aleatoriamente
        this.speedY = 5 * (Math.random() > 0.5 ? 1 : -1); // Reinicia a velocidade vertical aleatoriamente

        // Gera uma recompensa apenas após a marcação de um ponto
        if (pontuador === 'esquerda' || pontuador === 'direita') {
            this.mundo.gerarRecompensaAleatoria();
        }
    }
}

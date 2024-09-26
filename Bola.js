class Bola {
    constructor(x, y, radius, mundo) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = 5;
        this.speedY = 5;
        this.mundo = mundo; // Referência ao mundo para gerar recompensas
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = 'white'; // Defina a cor da bola
        context.fill();
        context.closePath();
    }

    update(canvas, barraEsquerda, barraDireita, colisao, pontuacao) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.speedY = -this.speedY;
        }

        if (colisao.detectar(this, barraEsquerda) || colisao.detectar(this, barraDireita)) {
            this.speedX = -this.speedX;
        }

        if (this.x + this.radius > canvas.width) {
            pontuacao.incrementarEsquerda();
            this.reset(canvas, 'esquerda');
        }

        if (this.x - this.radius < 0) {
            pontuacao.incrementarDireita();
            this.reset(canvas, 'direita');
        }
    }

    reset(canvas, pontuador) {
        console.log('Reinicializando a bola...');
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.speedX = 5 * (Math.random() > 0.5 ? 1 : -1); // Reinicia a velocidade horizontal aleatoriamente
        this.speedY = 5 * (Math.random() > 0.5 ? 1 : -1); // Reinicia a velocidade vertical aleatoriamente

        // Gera uma recompensa apenas após a marcação de um ponto
        if (pontuador === 'esquerda' || pontuador === 'direita') {
            this.mundo.gerarRecompensaAleatoria();
        }
    }
}

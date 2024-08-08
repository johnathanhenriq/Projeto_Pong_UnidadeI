class Pontuacao {
    constructor() {
        this.pontosEsquerda = 0;
        this.pontosDireita = 0;
    }

    incrementarEsquerda() {
        this.pontosEsquerda++;
    }

    incrementarDireita() {
        this.pontosDireita++;
    }

    draw(context, canvas) {
        context.fillStyle = 'white';
        context.font = '20px Arial';
        context.fillText(this.pontosEsquerda, canvas.width / 4, 20);
        context.fillText(this.pontosDireita, 3 * canvas.width / 4, 20);
    }
}

class Pontuacao {
    constructor(mundo) {
        this.pontosEsquerda = 0;
        this.pontosDireita = 0;
        this.mundo = mundo;
        this.pontoMarcado = false; // Flag para indicar se um ponto foi marcado
    }

    incrementarEsquerda() {
        this.pontosEsquerda++;
        this.pontoMarcado = true; // Indica que um ponto foi marcado
    }

    incrementarDireita() {
        this.pontosDireita++;
        this.pontoMarcado = true; // Indica que um ponto foi marcado
    }

    dobrarPontuacao(lado) {
        if (lado === 'esquerda') {
            this.pontosEsquerda += 2;
        }else{
            this.pontosDireita += 2;
        }
        
    }

    draw(context, canvas) {
        context.fillStyle = 'white';
        context.font = '20px Arial';
        context.fillText(this.pontosEsquerda, canvas.width / 4, 20);
        context.fillText(this.pontosDireita, 3 * canvas.width / 4, 20);
    }
}

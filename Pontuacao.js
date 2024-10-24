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
        } else {
            this.pontosDireita += 2;
        }
    }

    draw() {
        fill(255); // Define a cor de preenchimento como branco
        textSize(20); // Define o tamanho da fonte
        textAlign(CENTER, TOP); // Alinha o texto ao centro horizontalmente e ao topo verticalmente
        text(this.pontosEsquerda, width / 4, 20); // Desenha a pontuação da esquerda
        text(this.pontosDireita, 3 * width / 4, 20); // Desenha a pontuação da direita
    }
}

class Mundo {
    constructor() {
        this.bola = new Bola(width / 2, height / 2, 10, this);
        this.barraEsquerda = new Barra(8, (height - 100) / 2, 10, 100);
        this.barraDireita = new Barra(width - 20, (height - 100) / 2, 10, 100);
        this.pontuacao = new Pontuacao(this);
        this.colisao = new Colisao();
        this.recompensas = [];
        this.temporizador = new Temporizador(2000, () => this.gerarRecompensaAleatoria());
    }

    reinicializarJogo() {
        console.log('Reinicializando o jogo...');
        this.bola.reset();
        this.barraEsquerda = new Barra(8, (height - 100) / 2, 10, 100);
        this.barraDireita = new Barra(width - 20, (height - 100) / 2, 10, 100);
        this.recompensas = []; // Limpa as recompensas ao reiniciar o jogo
    }

    atualizarRecompensas() {
        this.recompensas = this.recompensas.filter(recompensa => {
            if (recompensa.update()) {
                return false; // Remove recompensas que expiraram ou colidiram
            }
            return true;
        });
    }

    gerarRecompensaAleatoria() {
        if (this.recompensas.length > 0) return; // Garante que apenas uma recompensa seja gerada por vez
        this.temporizador.iniciar();
        const destinoX = Math.random() * width;
        const destinoY = Math.random() * height;
        const tipo = Math.random() > 0.5 ? 'amarelo' : 'vermelho';
        let novaRecompensa;
        if (tipo === 'amarelo') {
            novaRecompensa = new RecompensaAmarelo(destinoX, destinoY);
        } else {
            novaRecompensa = new RecompensaVermelho(destinoX, destinoY);
        }
        this.recompensas.push(novaRecompensa);
    }

    checkRecompensaCollision() {
        this.recompensas.forEach(recompensa => {
            if (this.colisao.detectarRecompensa(this.bola, recompensa)) {
                const lado = this.bola.x < width / 2 ? 'esquerda' : 'direita';
                recompensa.aplicar(this.barraEsquerda, this.barraDireita, this.pontuacao, lado);
                this.recompensas = this.recompensas.filter(r => r !== recompensa); 
            }
        });
    }

    update() {
        this.bola.update(this.barraEsquerda, this.barraDireita, this.colisao, this.pontuacao);

        if (this.pontuacao.pontoMarcado) {
            this.reinicializarJogo();
            this.pontuacao.pontoMarcado = false; // Reset the flag
        }

        this.checkRecompensaCollision();
        this.atualizarRecompensas();
    }

    draw() {
        background(0);
        this.barraEsquerda.draw();
        this.barraDireita.draw();
        this.bola.draw();
        this.pontuacao.draw();
        this.recompensas.forEach(recompensa => recompensa.draw());
    }
}

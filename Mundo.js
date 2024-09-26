class Mundo {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.bola = new Bola(canvas.width / 2, canvas.height / 2, 10, this);
        this.barraEsquerda = new Barra(8, (canvas.height - 100) / 2, 10, 100);
        this.barraDireita = new Barra(this.canvas.width - 20, (this.canvas.height - 100) / 2, 10, 100);
        this.pontuacao = new Pontuacao(this);
        this.colisao = new Colisao();
        this.recompensas = [];
        this.temporizador = new Temporizador(10000, () => this.gerarRecompensaAleatoria());
        this.bindControls();
        this.gameLoop();
    }

    bindControls() {
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'w':
                    this.barraEsquerda.moveUp();
                    break;
                case 's':
                    this.barraEsquerda.moveDown(this.canvas);
                    break;
                case 'ArrowUp':
                    this.barraDireita.moveUp();
                    break;
                case 'ArrowDown':
                    this.barraDireita.moveDown(this.canvas);
                    break;
            }
        });
    }

    reinicializarJogo() {
        console.log('Reinicializando o jogo...');
        this.bola.reset(this.canvas);
        this.barraEsquerda = new Barra(8, (this.canvas.height - 100) / 2, 10, 100);
        this.barraDireita = new Barra(this.canvas.width - 20, (this.canvas.height - 100) / 2, 10, 100);
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
        const destinoX = Math.random() * this.canvas.width;
        const destinoY = Math.random() * this.canvas.height;
        const tipo = Math.random() > 0.5 ? 'amarelo' : 'vermelho';
        let novaRecompensa;
        if (tipo === 'amarelo') {
            novaRecompensa = new RecompensaAmarelo(destinoX, destinoY, this.canvas);
        } else {
            novaRecompensa = new RecompensaVermelho(destinoX, destinoY, this.canvas);
        }
        this.recompensas.push(novaRecompensa);
    }

    checkRecompensaCollision() {
        this.recompensas.forEach(recompensa => {
            if (this.colisao.detectarRecompensa(this.bola, recompensa)) {
                const lado = this.bola.x < this.canvas.width / 2 ? 'esquerda' : 'direita';
                recompensa.aplicar(this.barraEsquerda, this.barraDireita, this.pontuacao, lado);
                this.recompensas = this.recompensas.filter(r => r !== recompensa); // Remove a recompensa após aplicar
            }
        });
    }

    update() {
        console.log('Atualizando o jogo...');
        this.bola.update(this.canvas, this.barraEsquerda, this.barraDireita, this.colisao, this.pontuacao);

        if (this.pontuacao.pontoMarcado) {
            console.log('Ponto marcado, reinicializando...');
            this.reinicializarJogo();
            this.pontuacao.pontoMarcado = false; // Reset the flag
        }

        this.checkRecompensaCollision();
        this.atualizarRecompensas();
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.barraEsquerda.draw(this.context);
        this.barraDireita.draw(this.context);
        this.bola.draw(this.context);
        this.pontuacao.draw(this.context, this.canvas);

        // Desenha as recompensas
        this.recompensas.forEach(recompensa => recompensa.draw(this.context));
    }

    gameLoop() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.gameLoop());
    }
}

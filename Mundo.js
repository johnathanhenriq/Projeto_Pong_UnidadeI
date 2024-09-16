class Mundo {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.bola = new Bola(canvas.width / 2, canvas.height / 2, 10);
        this.barraEsquerda = new Barra(8, (canvas.height - 100) / 2, 10, 100);
        this.barraDireita = new Barra(canvas.width - 20, (canvas.height - 100) / 2, 10, 100);
        this.pontuacao = new Pontuacao(this);
        this.colisao = new Colisao();
        this.drops = [];

        this.temporizador = new Temporizador(5000, () => this.gerarDropAleatorio()); // Gera um drop a cada 5 segundos
        this.temporizador.iniciar();

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

    atualizarDrops() {
        this.drops = this.drops.filter(drop => {
            if (drop.update(this.bola)) {
                return false; // Remove drops que expiraram ou colidiram
            }
            return true;
        });
    }

    gerarDrop(pontuador) {
        let destinoX, destinoY;
        if (pontuador === 'esquerda') {
            destinoX = this.barraEsquerda.x + this.barraEsquerda.width / 2;
            destinoY = this.barraEsquerda.y + this.barraEsquerda.height / 2;
        } else {
            destinoX = this.barraDireita.x + this.barraDireita.width / 2;
            destinoY = this.barraDireita.y + this.barraDireita.height / 2;
        }
        
        const tipo = Math.random() > 0.5 ? 'amarelo' : 'vermelho';
        const novoDrop = new Drop(Math.random() * this.canvas.width, Math.random() * this.canvas.height, tipo, destinoX, destinoY);
        this.drops.push(novoDrop);
    }

    gerarDropAleatorio() {
        const tipo = Math.random() > 0.5 ? 'amarelo' : 'vermelho';
        const novoDrop = new Drop(Math.random() * this.canvas.width, Math.random() * this.canvas.height, tipo, Math.random() * this.canvas.width, Math.random() * this.canvas.height);
        this.drops.push(novoDrop);
    }

    checkDropCollision() {
        this.drops.forEach(drop => {
            if (drop.colidiuCom(this.bola)) {
                let recompensa;
                if (drop.tipo === 'amarelo') {
                    recompensa = new RecompensaAmarelo(drop.x, drop.y, this.canvas);
                } else {
                    recompensa = new RecompensaVermelho(drop.x, drop.y, this.canvas);
                }
                recompensa.aplicar(this.barraEsquerda, this.barraDireita, this.pontuacao);
                this.drops = this.drops.filter(d => d !== drop); // Remove o drop após aplicar a recompensa
            }
        });
    }

    update() {
        this.bola.update(this.canvas, this.barraEsquerda, this.barraDireita, this.colisao, this.pontuacao);

        this.checkDropCollision();
        this.atualizarDrops();
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.barraEsquerda.draw(this.context);
        this.barraDireita.draw(this.context);
        this.bola.draw(this.context);
        this.pontuacao.draw(this.context, this.canvas);

        // Desenha os drops
        this.drops.forEach(drop => drop.draw(this.context));
    }

    gameLoop() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.gameLoop());
    }
}

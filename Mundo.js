class Mundo {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.bola = new Bola(canvas.width / 2, canvas.height / 2, 10);
        this.barraEsquerda = new Barra(6, (canvas.height - 100) / 2, 10, 100);
        this.barraDireita = new Barra(canvas.width - 20, (canvas.height - 100) / 2, 10, 100);
        this.pontuacao = new Pontuacao();
        this.colisao = new Colisao();

        this.bindControls();
        this.gameLoop();
    }

    bindControls() {
        document.addEventListener('keydown', (event) => {
            switch(event.key) {
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

    gameLoop() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.gameLoop());
    }

    update() {
        this.bola.update(this.canvas, this.barraEsquerda, this.barraDireita, this.colisao, this.pontuacao);
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.barraEsquerda.draw(this.context);
        this.barraDireita.draw(this.context);
        this.bola.draw(this.context);
        this.pontuacao.draw(this.context, this.canvas);
    }
}

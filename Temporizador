class Temporizador {
    constructor(duracao, callback) {
        this.duracao = duracao; // em milissegundos
        this.callback = callback;
        this.startTime = null;
    }

    iniciar() {
        this.startTime = Date.now();
        this.verificarTempo();
    }

    verificarTempo() {
        const agora = Date.now();
        if (agora - this.startTime >= this.duracao) {
            this.callback();
            this.startTime = agora; // Reinicia o temporizador
        }
        requestAnimationFrame(() => this.verificarTempo());
    }
}


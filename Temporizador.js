class Temporizador {
    constructor(duracao, callback) {
        this.duracao = duracao; // em milissegundos
        this.callback = callback;
        this.startTime = null;
        this.ativo = false; // Flag para controlar o estado do temporizador
    }

    iniciar() {
        this.startTime = Date.now();
        this.ativo = true;
        this.verificarTempo();
    }

    parar() {
        this.ativo = false;
    }

    verificarTempo() {
        if (!this.ativo) return;

        const agora = Date.now();
        if (agora - this.startTime >= this.duracao) {
            this.callback();
            this.startTime = agora; // Reinicia o temporizador
        }
        requestAnimationFrame(() => this.verificarTempo());
    }
}

class Temporizador {
    constructor(duracao, callback) {
        this.duracao = duracao; // em milissegundos
        this.callback = callback;
        this.startTime = null;
        this.ativo = false; // Flag para controlar o estado do temporizador
    }

    iniciar() {
        this.startTime = millis(); // Utiliza a função millis() do p5.js
        this.ativo = true;
        this.verificarTempo();
    }

    parar() {
        this.ativo = false;
    }

    verificarTempo() {
        if (!this.ativo) return;

        const agora = millis(); // Utiliza a função millis() do p5.js
        if (agora - this.startTime >= this.duracao) {
            this.callback();
            this.startTime = agora; // Reinicia o temporizador
        }
        requestAnimationFrame(() => this.verificarTempo());
    }
}

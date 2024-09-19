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

    setDuracao(novaDuracao) {
        this.duracao = novaDuracao;
    }
}

// Exemplo de uso
const drop = new RecompensaAmarelo(100, 100, canvas);
const temporizador = new Temporizador(5000, () => {
    // Código para remover ou desativar o drop
    drop.remover(); // Supondo que você tenha um método para remover o drop
});

// Iniciar o temporizador
temporizador.iniciar();

// Para ajustar a duração do drop
temporizador.setDuracao(4000); 


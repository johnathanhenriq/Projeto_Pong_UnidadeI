class RecompensaVermelho extends Recompensa {
    constructor(x, y, canvas) {
        super(x, y, canvas, 'red');
    }

    aplicar(barraEsquerda, barraDireita, pontuacao, lado) {
        // Lógica para aplicar o efeito da recompensa
        pontuacao.dobrarPontuacao(lado);       
    }
}

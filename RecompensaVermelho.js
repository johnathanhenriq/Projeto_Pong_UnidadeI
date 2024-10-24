class RecompensaVermelho extends Recompensa {
    constructor(x, y) {
        super(x, y, 'red');
    }

    aplicar(barraEsquerda, barraDireita, pontuacao, lado) {
        // Lógica para aplicar o efeito da recompensa
        pontuacao.dobrarPontuacao(lado);       
    }
}

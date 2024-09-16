class Pontuacao {
    constructor(mundo) {
        this.pontosEsquerda = 0;
        this.pontosDireita = 0;
        this.mundo = mundo;
    }

    incrementarEsquerda() {
        this.pontosEsquerda++;
        this.mundo.gerarDrop('esquerda'); // Gere um drop quando o lado esquerdo pontuar
    }

    incrementarDireita() {
        this.pontosDireita++;
        this.mundo.gerarDrop('direita'); // Gere um drop quando o lado direito pontuar
    }

    dobrarPontuacao(jogador) {
        if (jogador === 'esquerda') {
            this.pontosEsquerda *= 2;
        } else if (jogador === 'direita') {
            this.pontosDireita *= 2;
        }
    }

    draw(context, canvas) {
        context.fillStyle = 'blue';
        context.font = '20px Arial';
        context.fillText(this.pontosEsquerda, canvas.width / 4, 20);
        context.fillText(this.pontosDireita, 3 * canvas.width / 4, 20);
    }
}

// Exemplo de classe Jogador
class Jogador {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    // Método para verificar colisão com o drop
    colideCom(drop) {
        return this.x < drop.x + drop.width &&
               this.x + this.width > drop.x &&
               this.y < drop.y + drop.height &&
               this.y + this.height > drop.y;
    }
}

// Exemplo de classe Drop
class Drop {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    // Função para recolher o drop (remover do jogo, por exemplo)
    recolher() {
        // Lógica para remover o drop
        console.log("Drop recolhido!");
    }
}



class Pontuacao {
    constructor(mundo) {
        this.pontosEsquerda = 0;
        this.pontosDireita = 0;
        this.mundo = mundo;
    }

    incrementarEsquerda() {
        this.pontosEsquerda++;
        this.mundo.gerarDrop('esquerda'); 
    }

    incrementarDireita() {
        this.pontosDireita++;
        this.mundo.gerarDrop('direita'); 
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

function checkDropCollision(jogador, drop, pontuacao, lado) {
    if (jogador.colideCom(drop)) { 
        pontuacao.dobrarPontuacao(lado); 
        drop.recolher(); // Recolhe o drop
    }
}

// Exemplo de uso
const mundo = {}; // Simulação de mundo
const pontuacao = new Pontuacao(mundo);
const jogadorEsquerda = new Jogador(50, 50, 20, 100);
const jogadorDireita = new Jogador(400, 50, 20, 100);
const drop = new Drop(200, 100, 10, 10);

// Simulando colisão do jogador da esquerda com o drop
checkDropCollision(jogadorEsquerda, drop, pontuacao, 'esquerda');



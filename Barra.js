class Barra {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 15;
    }

    draw(context) {
        context.fillStyle = 'white';
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    moveUp() {
        this.y -= this.speed;
        if (this.y < 10) {
            this.y = 10;
        }
    }

    moveDown(canvas) {
        this.y += this.speed;
        if (this.y + this.height > canvas.height - 10) {
            this.y = canvas.height - this.height - 10;
        }
    }

    diminuirAltura(fator) {
        this.height *= fator;
        this.height = Math.max(this.height, 10); // altura mínima 
    }

    aumentarAltura(fator) {
        this.height *= fator;
        this.height = Math.min(this.height, this.canvas.height - 20); // altura máxima
    }

    aplicarRecompensa(recompensa) {
        if (recompensa.tipo === 'amarelo') {
            this.aumentarAltura(1.2); // Aumenta a altura em 20%
        } else if (recompensa.tipo === 'vermelho') {
            this.diminuirAltura(0.8); // Diminui a altura em 20%
        }
    }
}

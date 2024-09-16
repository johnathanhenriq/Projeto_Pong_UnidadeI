class Drop {
    constructor(x, y, tipo, destinoX, destinoY) {
        this.x = x;
        this.y = y;
        this.tipo = tipo;
        this.width = 20;
        this.height = 20;
        this.velocidade = 2;
        this.destinoX = destinoX;
        this.destinoY = destinoY;
        this.duracao = 10000; // 10 segundos
        this.startTime = Date.now();
    }

    draw(context) {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.tipo === 'amarelo' ? 'yellow' : 'red';
        context.fill();
        context.closePath();
    }

    update(bola) {
        const dx = this.destinoX - this.x;
        const dy = this.destinoY - this.y;
        const distancia = Math.sqrt(dx * dx + dy * dy);
        
        if (distancia > 0) {
            const moveX = (dx / distancia) * this.velocidade;
            const moveY = (dy / distancia) * this.velocidade;

            this.x += moveX;
            this.y += moveY;
        }

        if (this.colidiuCom(bola)) {
            console.log('Colisão detectada:', this, bola);
            return true; // Indica que o drop deve ser removido após a colisão
        }

        if (Date.now() - this.startTime > this.duracao) {
            return true; // Drop expirado
        }
        return false;
    }

    colidiuCom(bola) {
        const colidiu = this.x < bola.x + bola.radius &&
                        this.x + this.width > bola.x - bola.radius &&
                        this.y < bola.y + bola.radius &&
                        this.y + this.height > bola.y - bola.radius;
        
        if (colidiu) {
            console.log('Colisão detectada:', this, bola);
        }
        
        return colidiu;
    }
}

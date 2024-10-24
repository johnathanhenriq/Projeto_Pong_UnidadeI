class Barra {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 20;
    }

    draw() {
        fill(255); // Define a cor de preenchimento como branco
        rect(this.x, this.y, this.width, this.height); // Desenha o retângulo da barra
    }

    moveUp() {
        this.y -= this.speed;
        if (this.y < 0) {
            this.y = 0;
        }
    }

    moveDown() {
        this.y += this.speed;
        if (this.y + this.height > height) {
            this.y = height - this.height;
        }
    }
}

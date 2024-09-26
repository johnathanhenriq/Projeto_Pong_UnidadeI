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

}

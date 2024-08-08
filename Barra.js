class Barra {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 15;
    }

    draw(context) {
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    moveUp() {
        this.y = Math.max(this.y - this.speed, 10);
    }

    moveDown(canvas) {
        this.y = Math.min(this.y + this.speed, canvas.height - this.height);
    }
}
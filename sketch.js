
let mundo;

function setup() {
    const canvas = createCanvas(600, 400);
    mundo = new Mundo();
}

function draw() {
    mundo.update();
    mundo.draw();
}

function keyPressed() {
    switch (key) {
        case 'w':
            mundo.barraEsquerda.moveUp();
            break;
        case 's':
            mundo.barraEsquerda.moveDown();
            break;
        case 'ArrowUp':
            mundo.barraDireita.moveUp();
            break;
        case 'ArrowDown':
            mundo.barraDireita.moveDown();
            break;
    }
}

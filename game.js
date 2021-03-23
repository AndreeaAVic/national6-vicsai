console.log('OOP Game');

class GameObject {
    constructor() {
        this.width = 50;
        this.height = 50;
        this.x = 0;
        this.y = 0;
        this.generateRef();
        // this.move(50, 225);
    }

    generateRef() {
        this.ref = document.createElement('div');
        this.ref.style.width = `${this.width}px`;
        this.ref.style.height = `${this.height}px`;
        this.ref.style.position = 'absolute';
        this.ref.style.top = 0;
        this.ref.style.left = 0;

        document.getElementById('game-scene').appendChild(this.ref);
    }

    move(x, y) {
        this.x = x;
        this.y = y;
        this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}

class Player extends GameObject {
    constructor() {
        super();
        this.ref.style.background = 'blue';
        this.move(50, 225);
    }

    moveUp() {
        this.move(this.x, this.y - 25);
    }

    moveDown() {
        this.move(this.x, this.y + 25);  
    }
}

class Obstacle extends GameObject {
    constructor() {
        super();
        this.ref.style.background = 'red';
        this.move(1060, 25);
    }

    moveLeft() {
        this.move(this.x - 5, this.y)
    }
}

//// --- User input

let keyUpPress = false;
let keyDownPress = false;
document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowUp') {
        keyUpPress = true;
    }

    if(event.key === 'ArrowDown') {
        keyDownPress = true;
    }    
});

document.addEventListener('keyup', (event) => {
    if(event.key === 'ArrowUp') {
        keyUpPress = false;
    }

    if(event.key === 'ArrowDown') {
        keyDownPress = false;
    }
});

//// --- User input

const player = new Player();
const obstacle = new Obstacle();

// Game Loop
setInterval(() => {
    console.log(keyUpPress);

    if(keyUpPress) player.moveUp();
    if(keyDownPress) player.moveDown();
    obstacle.moveLeft();
}, 250);
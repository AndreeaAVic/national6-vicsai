console.log('Generate Starship');

const spaceshipArray = ['blue-spaceship.png', 'green-spaceship.png', 'red-spaceship.png'];
let spaceship;

class Spaceship {
    constructor() {
        this.x = 0;
        this.y = 0;
    }

    generateHtmlRef() {
        let randomSpaceship = spaceshipArray[Math.floor(Math.random() * spaceshipArray.length)];
        this.ref = document.createElement('img');
        this.ref.src = randomSpaceship;
        this.ref.style.width = '50px';
        this.ref.style.height = '50px';
        this.ref.style.display = 'block';
        this.ref.style.margin = '10px';
        document.body.appendChild(this.ref);
    }

    moveRight() {
        this.x += 5;
        this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }

    moveLeft() {
        this.x -= 5;
        this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }

    moveDown() {
        this.y += 5;
        this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }

    moveUp() {
        this.y -= 5;
        this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}

document.getElementById('generate').addEventListener('click', () => {
    spaceship = new Spaceship();
    spaceship.generateHtmlRef();
});

let keyRightPress = false;
let keyLeftPress = false;
let keyDownPress = false;
let keyUpPress = false;
document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowRight') {
        keyRightPress = true;
    }
    if(keyRightPress) spaceship.moveRight();

    if(event.key === 'ArrowLeft') {
        keyLeftPress = true;
    }
    if(keyLeftPress) spaceship.moveLeft();

    if(event.key === 'ArrowDown') {
        keyDownPress = true;
    }
    if(keyDownPress) spaceship.moveDown();

    if(event.key === 'ArrowUp') {
        keyUpPress = true;
    }
    if(keyUpPress) spaceship.moveUp();
});

document.addEventListener('keyup', (event) => {
    if(event.key === 'ArrowRight') {
        keyRightPress = false;
    }

    if(event.key === 'ArrowLeft') {
        keyLeftPress = false;
    }

    if(event.key === 'ArrowDown') {
        keyDownPress = false;
    }

    if(event.key === 'ArrowUp') {
        keyUpPress = false;
    }
});
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

    removeRef() {
        this.ref.remove();
    }
}

class Player extends GameObject {
    constructor() {
        super();
        this.ref.style.background = 'blue';
        this.move(50, 225);
    }

    moveUp() {
        if(this.y - 25 >= 0) this.move(this.x, this.y - 25);
    }

    moveDown() {
        if(this.y + 25 <= 500 - this.height) this.move(this.x, this.y + 25);  
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

class ObstacleFactory {
    constructor() {
        this.obstacles = [];
    }

    createObstacle() {
        const obstacle = new Obstacle();
        obstacle.move(1060, Math.floor(Math.random() * 450));
        this.obstacles.push(obstacle);
    }

    destroyObstacles() {
        this.obstacles = this.obstacles.filter((obstacle) => {
            if(obstacle.x < -50) {
                obstacle.removeRef();
                return false;
            }

            return true;
        });
    }

    moveObstacles() {
        for(const obstacle of this.obstacles) {
            obstacle.moveLeft();
        }
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

//// --- Collision detection 
function collisionDetection(player, obstacles) {
    for(const obstacle of obstacles) {
        if (
            (player.x <= obstacle.x &&
              obstacle.x <= player.x + player.width &&
              player.y <= obstacle.y &&
              obstacle.y <= player.y + player.height) ||
            (player.x <= obstacle.x + obstacle.width &&
              obstacle.x + obstacle.width <= player.x + player.width &&
              player.y <= obstacle.y + obstacle.height &&
              obstacle.y + obstacle.height <= player.y + player.height)
        )
        return true;
    }

    return false;
}

const player = new Player();
const obstacleFactory = new ObstacleFactory();
// const obstacle = new Obstacle();

// Game Loop
let count = 0;

let gameLoop = setInterval(() => {
    console.log(keyUpPress);
})

setInterval(() => {
    console.log(keyUpPress);

    if(keyUpPress) player.moveUp();
    if(keyDownPress) player.moveDown();

    if(count % 10 === 0) obstacleFactory.createObstacle();

    obstacleFactory.moveObstacles();
    if(collisionDetection(player, obstacleFactory.obstacles)) {
        clearInterval(gameLoop);
        alert('You hit an obstacle');
        window.location = '/';
    }

    obstacleFactory.destroyObstacles();
    // obstacle.moveLeft();

    count++;
}, 50);
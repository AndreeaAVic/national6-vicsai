console.log('Generate Starship');

const spaceshipArray = ['blue-spaceship.png', 'green-spaceship.png', 'red-spaceship.png'];
let spaceship;
let createdSpaceshipArray = [];

class Spaceship {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.active = false;
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
        this.ref.addEventListener('click', () => {
            for(const element of createdSpaceshipArray) {
                element.active = false;
            }
            this.active = true;
            spaceship.active = true;
            this.selectedSpaceship();
        });
    }

    selectedSpaceship() {
        document.addEventListener('keydown', (event) => {
            if(this.active) {
                this.moveSpaceship(event.key);
            }
        });
    }

    moveSpaceship(direction) {
        if(direction === 'ArrowRight') {
            this.x += 5;
            this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
        }
    
        if(direction === 'ArrowLeft') {
            this.x -= 5;
            this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
        }
    
        if(direction === 'ArrowDown') {
            this.y += 5;
            this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
        }
    
        if(direction === 'ArrowUp') {
            this.y -= 5;
            this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
        }
    }
}

document.getElementById('generate').addEventListener('click', () => {
    spaceship = new Spaceship();
    spaceship.generateHtmlRef();
    createdSpaceshipArray.push(spaceship);
});


document.addEventListener('keydown', (event) => {
    if(spaceship.active === false) {
        spaceship.moveSpaceship(event.key);
    }
});
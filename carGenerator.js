console.log('Car generator');

class CarAuto {
    constructor() {
        this.runningEngine = false;
        this.position = 0;
        this.generateHtmlRef();
        this.setStartEngine();
        this.setMoveCar();
    }

    generateHtmlRef() {
        this.ref = document.createElement('img');
        this.ref.src = 'car.svg';
        this.ref.classList.add('car');
        document.body.appendChild(this.ref);
    }

    setStartEngine() {
        this.ref.addEventListener('click', () => {
            this.startEngine();
        })
    }

    startEngine() {
        if(!this.runningEngine) {
            this.runningEngine = true;
            console.log('Engine is starting');
            this.ref.classList.add('car--start');
        }
    }

    setMoveCar() {
        document.addEventListener('keydown', (event) => {
            console.log(event);
            if(this.runningEngine) {
                this.moveCar(event.key);
            }
        });
    }

    moveCar(direction) {
        if(direction === 'ArrowRight') {
            this.position += 5;
            this.ref.style.marginLeft = `${this.position}px`;
        } else if(direction === 'ArrowLeft') {
            this.position -= 2;
            this.ref.style.marginLeft = `${this.position}px`;
        }
    }
}
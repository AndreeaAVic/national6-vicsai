console.log('JavaScript Object Oriented Programming');

const car1 = {
    nrOfWheels: 4,
    color: 'red',
    engine: 'diesel',
    runningEngine: false,
    turn: function(direction) {
        if(this.runningEngine) {
            console.log('The car is turning', direction);
        } else {
            console.log('The car is not running, turn the engine on');
        }
        
    },
    startEngine: function() {
        console.log(this);
        console.log('The engine is starting');
        this.runningEngine = true;
    }
};

const car2 = {
    nrOfWheels: 4,
    color: 'white',
    engine: 'electric',
    runningEngine: false,
    turn: function(direction) {
        if(this.runningEngine) {
            console.log('The car is turning', direction);
        } else {
            console.log('The car is not running, turn the engine on');
        }
        
    },
    startEngine: function() {
        console.log(this);
        console.log('The engine is starting');
        this.runningEngine = true;
    }
};

// car.startEngine();
car1.turn('left');
car1.startEngine();
car1.turn('left');


// Classes
class Car {
    constructor(color, engine) {
        this.__nrOfWheels = 4;
        this.color = color;
        this.engine = engine;
        this.runningEngine = false;
    }

    turn(direction) {
        if(this.runningEngine) {
            console.log('The car is turning', direction);
        } else {
            console.log('The car is not running, turn the engine on');
        }
    }

    startEngine() {
        console.log(this);
        console.log('The engine is starting');
        this.runningEngine = true;
    }
}

class Bike {}

const car3 = new Car('yellow', 'hybrid');
const car4 = new Car('pink', 'petrol');
console.log(car3);
console.log(car3.color);
car3.startEngine();
console.log(car3);
car3.color = 'green';
console.log(car3);

console.log(car4);
car4.nrOfDoors = 2;
console.log(car4);
console.log(car3);

console.log(Car.color); //Classes don't have attributes; Car is not an object, it's just a class.

let vehicle;
const typeOfVehicle = 'car';
if(typeOfVehicle === 'car') {
    vehicle = new Car();
} else {
    vehicle = new Bike();
}

document.getElementById('generate-car').addEventListener('click', () => {
    console.log('generate car');
    const newCar = new CarAuto();
});
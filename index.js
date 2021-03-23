console.log('JavaScript OOP game');

// object literal
// this comes from Object class
const obj = {};

const a = new Object();
console.log(a);

const b = [];

class Car {
    constructor(color) {
        this.color = color;
    }

    startCar() {
        console.log('Start car');
    }
}

class CarWithElectricWindows extends Car {
    openElectricWindow(windowNr) {
        console.log('Opening window', windowNr);
    }
}

const car1 = new Car('white');
console.log(car1);
const car2 = new CarWithElectricWindows('black');
console.log(car2);
car2.startCar();
car2.openElectricWindow(3);
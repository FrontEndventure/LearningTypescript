"use strict";
class Vehicle {
    start() {
        console.log("bruummm");
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
let car = new Car();
car.start();
console.log(car.wheels);

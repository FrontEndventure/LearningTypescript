abstract class Vehicle {
  abstract wheels: number;

  start(): void {
    console.log("bruummm");
  }
}

class Car extends Vehicle {
  wheels: number = 4;
}

let car = new Car();

car.start();
console.log(car.wheels);



"use strict";
class Assus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("Off");
    }
}
class MacBook {
    constructor(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("off");
    }
}
let LaptopAssus = new Assus("Laptop Asus ROG", true);
console.log("laptop : ", LaptopAssus.name);
LaptopAssus.on();

interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Assus implements Laptop {
  name: string;
  isGaming: boolean;

  constructor(name: string, isGaming: boolean) {
    this.name = name;
    this.isGaming = isGaming;
  }
  on(): void {
    console.log("nyala");
  }
  off(): void {
    console.log("Off");
  }
}

class MacBook implements Laptop {
  name: string;
  keyboardLight: boolean;

  constructor(name: string, keyboardLight: boolean) {
    this.name = name;
    this.keyboardLight = keyboardLight;
  }

  on(): void {
    console.log("nyala");
  }
  off(): void {
    console.log("off");
  }
}

let LaptopAssus = new Assus("Laptop Asus ROG", true);
console.log("laptop : ", LaptopAssus.name);

LaptopAssus.on();

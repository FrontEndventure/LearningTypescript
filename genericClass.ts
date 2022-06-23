class List<T> {
  private data: T[];

  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(element: T): void {
    this.data.push(element);
  }

  addMultiple(...elements: T[]): void {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

// let number = new List<number>(1, 2, 3, 4, 5);

// number.add(7);
// number.addMultiple(3, 9, 11, 12);
// console.log("ini number dari class List,", number.getAll());

let randomData = new List<number | string>(1, "anak", "pemimpi");

randomData.add("bernama");
console.log(randomData.getAll());

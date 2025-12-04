function Car(color, brand) {
  this.color = color;
  this.brand = brand;
  this.start = function() {
    console.log("started",this.color);
  };
  // return this
}

let car1 = new Car("blue", "Audi");
car1.start()
// console.log(car1.start());
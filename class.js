class Car {
  constructor(color) {
    // this.name = name
    this.color = color;
    console.log({ k: this }, "this");
  }

  getSometing() {
    return "helo this is " + this.color + " " + this.name;
  }
}

class Model extends Car {
  constructor(name, color, mod) {
    super(color);
    this.name = name;
    this.mod = mod;
  }

  show() {
    return `I've ${this.name} car and the model is ${this.mod}`;
  }
}

const carObj = new Model("audi", "red", "a6");

Car.prototype.getDetails = function () {
  return `name of the car ${this.name}`;
};
console.log(carObj, Model.prototype, carObj.getSometing(), "prototype");

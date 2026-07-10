// index390
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const john = new Person('John', 30);
john.sayHello(); // Hello, my name is John and I am 30 years old.
console.log(john);
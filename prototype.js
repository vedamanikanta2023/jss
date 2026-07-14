function Animal(name){
    this.name = name;
}

Animal.prototype.sayName = function(){
    console.log(`Hi..! My Name is ${this.name}`);
}

function Dog (name,breed){
    Animal.call(this,name);
    this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.bark = function(){
    console.log(`boww bowwooo!`);
}

const fido = new Dog('Fido', 'Labrodar');
console.log(fido);
fido.sayName()
fido.bark()
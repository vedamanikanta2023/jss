const proto = {
  greet() {
    console.log('Hello!');
  }
};

const person = Object.create({...proto});

console.log(typeof person, "person");
console.log(person.greet, "person");
person.greet()

function Person1(name) {
  this.name = name;
}
Person1.prototype.greet = function () {
  console.log(`Hello, I’m ${this.name}`);
};

const per = new Person1('vedamanikanta');
per.greet()
console.log(per.per);
///---Event Bubbling---///
const parentDiv = document.createElement('div');
parentDiv.id = 'parent';
const button = document.createElement('button');
button.id = 'child';
button.textContent = 'click'
parentDiv.appendChild(button);
document.body.appendChild(parentDiv);

const parent = document.getElementById('parent');
const child = document.getElementById('child');

button.addEventListener('click', () => {
  console.log('Child element clicked');
})
// when clicking on the child it triggers the parent (ancestor) so, that called as event bubbling
parent.addEventListener('click', () => {
  console.log('Parent element clicked');
});
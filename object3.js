function changeAgeandReference(person) {
  person.age = 40;
  person = {
    name: "John",
    age: 50,
  };

  return person;
}
let person2 = {
  name: "Alex",
  age: 30,
};
const personObj2 = changeAgeandReference(person2);
console.log(person2);
console.log(personObj2);


let user = {
    name:'vedamanikanta vanga',
    age:26
}

const cloned = Object.assign({},user);
cloned.name='hsankarayya'
console.log(cloned)
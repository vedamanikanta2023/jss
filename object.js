let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
};
let { gender:gen='jasf', age } = person;

let a = 'firstName';
person['country'] = 'India'
console.log(person)
let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
};
let { gender:gen='jasf', age } = person;

let a = 'firstName';
person['country'] = 'India'
console.log(person)

const k={}

const b={key:'b'};
const c={key:'c'};

k[b]=234
k[c]='ojf'
console.log(k[b],k)
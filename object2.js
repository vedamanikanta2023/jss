let user = {
  name: "vedamanikanta",
  age: 29,
  fullName: {
    first: "vedamanianta",
    last: "vanga",
  },
};

const {
  fullName: { first },
} = user;
// console.log(first);

let c = {greeting:'Hi good mornign'};

let d ;
d=JSON.parse(JSON.stringify(c));
c.greeting = 'Hello'
console.log(c.greeting,d==c);

let person = {name:"hello"};

const members = [person];
person.name='null';
console.log(members);

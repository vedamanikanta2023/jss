const users = [
  { name: "abc", age: 35, isAdmin: true },
  { name: "xyz", age: 25, isAdmin: true },
  { name: "pqr", age: 30, isAdmin: false },
];

const biggest = users.reduce(
  (curr, acc) => {
    return curr.age > acc.age ? curr : acc;
  },
  { age: 0 },
);
console.log(biggest);

console.log(-5 / 0);

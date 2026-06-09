let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
};

const jsoned = JSON.stringify(person)
console.log(jsoned, typeof jsoned)
localStorage.setItem('test23',jsoned)
// document.getElementById('root').innerHTML=jsoned;
// const k={}

// const b={key:'b'};
// const c={key:'c'};

// k[b]=234
// k[c]='ojf'
// console.log(k[b],k)
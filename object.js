let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
};

const jsoned = JSON.stringify(person,['age','lastName'])
console.log(jsoned)

// document.getElementById('root').innerHTML=jsoned;
// const k={}

// const b={key:'b'};
// const c={key:'c'};

// k[b]=234
// k[c]='ojf'
// console.log(k[b],k)

const shape = {
  radius:10,
  diameter(){
    return this.radius*2
  },
  perimeter:function(){
    return 2*Math.PI*this.radius
  },
  perimeterWithArrowFn:()=>{
    return 2*Math.PI*this.radius
  }
}

console.log(shape.diameter())
console.log(shape.perimeterWithArrowFn())
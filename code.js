const add = ()=>{
  return 5+6;
}

const arr = [2,add,false];

let res =  arr[1](1);
console.log(res);
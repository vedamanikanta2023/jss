const not = "hai";
function outer(){
  let count = 0
  return function inner(){
    count ++;
    console.log(count)
    return count;
  }
}


const f1 = outer();
f1()
f1()
const f2 = outer();
f2()
f2()
f2()
f2()
console.log(f1,f2)

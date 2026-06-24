//memoizing the values, logic 
const add = (a,b)=>a+b;

const map = new Map();

function memoizeOne(fn){

    function temp(...args){
        const keys = args.join('_');
        if(map.has(keys)){
            console.log('returning from cache');
            return map.get(keys)
        }
        const result = fn(...args);
        map.set(keys,result)
        return result;
    }

    return temp;
}

const addtwo = memoizeOne(add);
console.log(addtwo(2,3));
console.log(addtwo(2,3));
console.log(addtwo(5,3));
console.log(addtwo(5,3));
console.log(map);

const clumsySquare = (num1,num2)=>{
    // for (let i=0;i<1000000;i++){}
    return num1*num2
}

console.time("hi");
clumsySquare(3298,98432);
console.timeEnd("hi");
console.time("hii");
clumsySquare(3298,98432);
console.timeEnd("hii");

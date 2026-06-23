//composition polyfill
//compose function


function addFive(a){
    console.log('addFive');
    return a+5;
}

function subtractTwo(a){
        console.log('subtractTwo');
return a-2
}

function multiplyFour(a){
       console.log('multiplyFour');
 return a*4;
}
// compose function
function compose(...functions){
    return function(args){
        return functions.reduceRight((arg,fn)=>fn(arg),args);
    }
}
//pipe function
function pipe(...functions){
    return function(args){
        return functions.reduce((arg,fn)=>fn(arg),args);
    }
}

const evaluate = compose(addFive,subtractTwo,multiplyFour);
const evaluateInOrder = pipe(addFive,subtractTwo,multiplyFour);

console.log(evaluate(5));
console.log(evaluateInOrder(5));
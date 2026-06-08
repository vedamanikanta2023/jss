// function* myGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const gen = myGenerator();
// console.log(gen.next(), "gen1");
// console.log(gen.next(), "gen2");
// console.log(gen.next(), "gen3");

// for (let item of gen){
// console.log(item,'item');
// }

// console.log([...gen])

function* generatorFunction() {
    try{
        yield "step 1";
        yield "step 2";
        yield "step 3";
    }finally{
        yield ('executed finally block')
    }
}

const gen = generatorFunction();

console.log(gen.next());
console.log(gen.return());
console.log(gen.next());
console.log(gen.next());
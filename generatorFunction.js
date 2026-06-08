function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = myGenerator();
// console.log(gen.next(), "gen1");
// console.log(gen.next(), "gen2");
// console.log(gen.next(), "gen3");


// for (let item of gen){
    // console.log(item,'item');
// }

console.log([...gen])
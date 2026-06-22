const data = false;

const data1 = new Boolean(false);

if (data) {
  console.log("first");
}

if (data1) {
  console.log("second", data1);
}

function aa() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);

    // function c(i){
    // setTimeout(() => {
    //         console.log(i);
    //       }, 1000);
    // }
    // c(i);
  }
}

// aa();


var person = {
    name:'vedamaniaknta',
    hello:function(text){
        console.log(`${this.name} saying hello ${text}, from ___`);
        return 'for bind'
    }
}

var person1 = {
    name:'rakaa..!'
}

var person2 = {
    name:'chandu eld'
}

var person3 = {
    name: 'raj kumar'
}

person.hello.call(person1,'world! call')
person.hello.apply(person2,['world! apply'])
const binding = person.hello.bind(person3)
console.log(binding('world bind'),'binding')
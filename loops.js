let myArray = [1, 2,'ljkasdf', 3, 4];

for (let i of myArray){
    console.log(i,'of')
}

for (let i in myArray){
    console.log(i,'in')
}

for(let k=1;k<=5;k++){
    console.log('for increasing',k)
}

let condition  = true;
var loop = 0
while(condition){
    console.log('while loop',loop);
   if(loop===4){
    condition=false;
   }
   ++loop
}
let name1 = 'vedamanikanta';
let reverseString = '';
for (let i in name1){
    reverseString+=(name1[name1.length-i-1]);
}

// console.log(reverseString===name1?'it is a Palindrome': 'it is not a Palindrome');
const findSecondLargestNumber=(arr=[])=>{
    let largest = -Infinity;
    let secondLargest=-Infinity;
    for (let i of arr){
        if(i>largest){
            largest=i;
        }
    }
    for (let k of arr){
        if (k>secondLargest&&k<largest){
            secondLargest=k
        }
    }
    return secondLargest;
}
const arrays = [10, 10, 10];

const  sLargest = findSecondLargestNumber(arrays);
console.log('sLargest',sLargest);

const arr1 = [1,2,3];
arr1[10]=32;
console.log(arr1.length,arr1)
// setTimeout(()=>console.log('Hi'));
console.log('last');

const obj = {a:1,b:2,c:3,d:4};
// const {a,d,...remain} = obj;
// console.log(remain);
function k(){
console.log('name12',name12);
var name12='alskdfj'

}
k();

function* fun() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}

// Calling the Generate Function
let gen = fun();
console.log('gen',gen,gen.next(),gen.next(),gen.next(),gen.next(),gen.next());
function f() {

    // It can be accessible any
    // where within this function
    var a = 10;
    console.log(a)
}
f();

// A cannot be accessible
// outside of function
console.log(1<2<3);
console.log(3>2>1)
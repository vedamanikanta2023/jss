let myArray = [5, "six", 2, 8.2];
const spliced = myArray.splice(2,2,9,6,8,7);

console.log(myArray,'myArray',spliced)

let itemIndex = myArray.findIndex((item)=>{
    console.log('item',item)
    return item==='six'})
console.log(itemIndex,'itemIndex')

const unshifted = myArray.unshift('vedam','rahul','attuluri');
const shifted = myArray.shift()
console.log('unshifted',{unshifted,myArray,shifted})
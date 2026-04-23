const arr = [-5,1,2,3,-6]


const binary = function(number=1){
    return number.toString(2);
}
const transformedArray = arr.map(binary)

const filterArray = arr.filter(function(number){
    return !(number%2)
})

//useing the reduce method to find sum of array
const reducedArrayToSum = arr.reduce(function(acc,curr){
    acc = acc+curr;
    return acc
},0)
console.log(reducedArrayToSum)

//using the reduce method to find the max number of array

const maxWithReduce = arr.reduce(function(acc,curr){
    acc = acc>curr?acc:curr
    return acc
},-Infinity)

console.log(maxWithReduce)

const users = [{
    firstName:'akshay',
    lasName:'khann',
    age: 26
},{
    firstName:'arjun',
    lasName:'rampal',
    age: 75
},{
    firstName:'padukune',
    lasName:'deepina',
    age: 218
},{
    firstName:'vedam',
    lasName:'kanta',
    age: 26
}]

const age26 = users.reduce(function(acc,curr){
    if(curr.age<27){
        acc.push(curr.firstName)
    }
    return acc
},[])

console.log(age26)
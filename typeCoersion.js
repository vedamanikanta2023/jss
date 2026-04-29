/**
 * Type Coersion is the automatic converstion of values from one to another, ex string to number
 * 
 *  */ 
console.log(1+'2')
console.log(1-'2')
console.log('8'*2)
console.log("8"*'2')
console.log(true*"2")
console.log(false*"2")
console.log("22"*true)
const zero = String(0)
console.log(zero?'yes':'no')
console.log(0===false,2**320,'square')

const arr = [1,1,2,5,7,0,5]
const set = new Set(arr)
console.log([...set],'set')



const is32Bit = (num)=>{
    return Number.isInteger(num) && num>-(2**31) && num <=(2**31)-1
}

console.log(is32Bit(321))
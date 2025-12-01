// Find the longest word in a string  
// Input: "The quick brown fox jumped over the lazy dog"
// Output: "jumped"
// Input :"The quick brown fox jumps over the lazy dog"
// Output:["quick","brown","jumps"]
const str = "The quick brown fox jumped over the lazy dog";
const longestWords = [];

const arrOfStrings = str.split(" ");
const lengsOfStrs=arrOfStrings.map((str1)=>str1.length);
let longestWord=Math.max(lengsOfStrs);;
arrOfStrings.forEach((singleStr)=>{
    if(singleStr.length>=longestWord.length){
        longestWord=singleStr;
        longestWords.push(singleStr)
    }
})

console.log(longestWord)

function capitalizeWords(str) {
 const ar = str.split(" ").map(word=>word[0].toUpperCase()+word.slice(1));
 return ar.join(" ");

}
console.log(capitalizeWords("hello world"));

//use case of anonymous functions 

(function(){
    var x = 10;
    console.log(x);
})()

// anonymous function as cb in settimeout
setTimeout(()=>{
console.log('anonymous cb');
},1000)

// more over we can use anonymous functions in higher order functions 

Array([1,2,3,4]).forEach(element => {
    console.log('higher order function with anonymous function');
});
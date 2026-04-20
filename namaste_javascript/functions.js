
// Function statement also Function Declaration
function a(){console.log('a called')};

//function expression 

var b = function (){
    console.log('b called')
}
a()
b()

// anonymous function
// function(){
//     console.log('is anonymous function')
// }

// Named Function Expresstion //
var c = a;
c()

// Difference between Parameters and  Arguments //
function some(param,param2){ // param,param2 were Parameters
    console.log('diff params&args called')
}

some(222,45432); // 222, 45432 were Arguments , values passed while clling functions are the 'arguments'


// First Class Functions //
// the ability to take function as parameter, and as value and returning the function  from another function is First Class Function
// Function are the first class citizent :)
var u = function(param1){
    return function(){
console.log('first class functions')
    }
}
u(function(){});

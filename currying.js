
function add(a){

    return function _(b){
        if(b) return add(a+b);
        return a;
    }
}

console.log(add(5)(2)(4)(8)());
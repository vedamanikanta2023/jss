//implement 

function add(a){
    return function _(b){
        if(b) return add(a+b);
        return a;
    }
}

console.log(add(5)(2)(4)(8)());


//implement this code//
const calc = {
    total:0,
    add(a){
        this.total+=a
        return this
    },
    multiply(b){
        this.total*=b
        return this
    },
    subtract(c){
        this.total-=c
        return this
    }
}

const result = calc.add(10).multiply(5).subtract(30).add(15);
console.log(result.total,'result this')
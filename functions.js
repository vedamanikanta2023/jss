//function declaration
function something(){
    return 'alsdjf'
}

//function expression
const expressfunction = function (){
    const value = 24387+'04238'
    return value
}

//arrow function
const nothing=()=>{
    this.firstName= 'vedamanikanta'
    this.lastName = 'vanga'
    this.fullName = ()=>{
        return this.firstName+" "+ this.lastName
    }
    return this.fullName()
}




console.log(nothing())
let name = {
    firstName:'vedamanikanta',
    lastName:'vanga',
    printFullName:function(){
        console.log(this.firstName+" "+this.lastName);
    }
}

name.printFullName()

let name2 = {
    firstName:'Virat',
    lastName:'Kohli',

}

function printReversedName(city,age){
    console.log(`${this.lastName} ${this.firstName} from ${city} aged ${age}`)
}

name.printFullName.call(name2);

// printReversedName.call(name,'Hyderabad',234)
printReversedName.apply(name2,['Delhi',65])

const reverseName = printReversedName.bind(name)

console.log(reverseName())
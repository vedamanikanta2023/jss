let name = {
  firstName: "vedamanikanta",
  lastName: "vanga",
};

const printFullName = function(town, city, country)  {
    
  console.log(`${this.firstName} is from ${town} from ${city} from ${country}`);
};


let printMyName = printFullName.bind(name,'dehradun','Delhi')
console.log(printMyName())

Function.prototype.mybind = function(...args){
    let obj=this;
    let params = args.slice(1);
    console.log(params,args)
    return function(...args2){
        obj.apply(args[0],[...params,...args2])
    }
}

let printMyName2 = printMyName.mybind('India');
console.log(printMyName2())
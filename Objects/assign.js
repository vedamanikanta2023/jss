const taget = { firstName:'Vedamanikanta', lastName:'Vanga', city: "hyd",
    get car2(){//getter
        return `${this.car} ${this.color}`
    },
    set setring(value){
        this.newKey = value
    }
 };

const source = { job: "software engineer", salary: 0 ,
    // fullname:function(param=''){

    //     console.log(`${this.firstName} ${param} ${this.lastName}`);
    //     return `${this.firstName} ${param} ${this.lastName}`
    // },
    carDetails:function(){
        console.log(`${this.fullname('')} has ${this.car} with ${this.color} color`);
    }
};

const source2 = {
    car:'audi',color:'white',
    fullname:function(param=''){

        console.log(`${this.firstName} ${param} ${this.lastName}`);
        return `${this.firstName} ${param} ${this.lastName}`
    },
}

Object.assign(taget, source,source2);
source.salary = 100000;
console.log(taget, "taget");
taget.fullname()
taget.carDetails()
taget.car2
taget.setring = 'swetha'
console.log(taget.car2,taget);



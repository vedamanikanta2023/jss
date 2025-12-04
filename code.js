function createCar(color, brand){
  return {
    color,
    brand,
    start:function(){
      console.log("started",color,this);
    }
  }
}

const car = createCar("red","sierra");
car.start()
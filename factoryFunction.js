

// Factory Function
function createCar(color, brand) {
  return {
    color,
    brand,
    start() {
      console.log(`${color} color ${brand} started `);
    }
  };
}

const car = createCar('Red','Audi');
car.start()
console.log(car)

function fetching(){

    // fetch('https://dummyjson.com/products')
    //   .then((response) => response.json())
    //   .then((data) => console.log(data)) // Non-blocking
    //   .catch((error) => console.error('er',error));

      return new Promise((res,rej)=>{
        fetch('https://dummyjson.com/products')
        .then(response=>response.json())
        .then(data=>res(data));
      })
}

console.log('Start of the program');

const fetchedDAta = fetching()
console.log('End of program');
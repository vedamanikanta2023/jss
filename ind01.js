function fetching() {
  return new Promise((res, rej) => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => res(data))
      .catch((err) => res(err));
  });
}

let apiData;

console.log("Start of the program");

async function doFetch() {
  apiData = await fetching();
  console.log(apiData);
  return apiData;
}

var dataddd = doFetch();
console.log(typeof dataddd);
setTimeout(async() => {
  console.log(await dataddd);
});

console.log("result of fetch", apiData);
console.log("end of program");

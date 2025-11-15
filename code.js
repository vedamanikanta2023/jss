function someAsynchronousFunction(isResolve = true) {
  console.log("time", new Date().toLocaleTimeString());
  return new Promise((resolve, reject) => {
    if (isResolve) {
      setTimeout(() => {
        resolve({ name: "vedam", age: 28 });
      }, 1000*3);
    } else {
      reject("error in Promise else");
    }
  });
}

someAsynchronousFunction(false)
  .then((data) => {
    console.log("in then time", new Date().toLocaleTimeString());
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.log("in catch time", new Date().toLocaleTimeString());
    console.error("An error occurred asynchronously (Promise):", error.message);
  });

async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("Data 8790965: ", response);
    if (!response.ok) {
      throw new Error(`HTTP erro! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Data received: ", data);
  } catch (e) {
    console.error("An error occured asynchronously (async/await):", e.message);
  }
}

// fetchData();

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

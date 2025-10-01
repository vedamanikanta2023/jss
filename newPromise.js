function makeGetRequest(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        // Check if the response status is not OK (e.g., 404, 500)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the response body as JSON
      })
      .then(data => {
        resolve(data); // Resolve the promise with the parsed data
      })
      .catch(error => {
        reject(error); // Reject the promise if any error occurs
      });
  });
}

// Example usage:
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'; // A public API for testing

makeGetRequest(apiUrl)
  .then(data => {
    console.log('Request successful:', data);
  })
  .catch(error => {
    console.error('Request failed:', error);
  });

  const data = async()=>{
    const data1=await makeGetRequest(apiUrl);
    console.log("data1",data1)
  }
  data()
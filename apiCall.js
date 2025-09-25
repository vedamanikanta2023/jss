const url = "https://api.restful-api.dev/objects";
async function getData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
// getData()

fetch(url)
.then(response=>{
    if(!response.ok){
        throw  new Error (`HTTP ERROR ${response.message}`)
    }
    return response.json();
})
.then(data=>{
    console.log('API data received:',data)
})
.catch(error=>{
    console.error('Error in fetching data',error);
})

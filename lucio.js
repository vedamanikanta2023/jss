fetch('https://workwithus.lucioai.com/get-started', {  // replace this URL with the actual endpoint
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "Vedamanikanta Vanga",
    email: "vedamanikanta.dali@gmail.com"
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

// f 

// const todos = [];

// const inputElement = document.getElementById("input").textContent;

// function addTodo() {
//   todos.push(inputElement);
//   console.log(todos);
// }


const todos = [];

// 1. Select the element once when the page loads
const inputElement = document.getElementById("input");

function addTodo() {
  // 2. Get the current text using .value inside the function
  const currentText = inputElement.value;
  
  // 3. Optional: Prevent adding empty items
  if (currentText.trim() !== "") {
    todos.push(currentText);
    console.log(todos);
    
    // 4. Optional: Clear the input box for the next item
    inputElement.value = ""; 
  }
}

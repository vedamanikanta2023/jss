const rootElement = document.getElementById("root");

let totalTodos = [];

const fetchResults = (skip = 0) => {
  fetch(`https://dummyjson.com/todos?limit=20&skip=${totalTodos.length}`)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      const todos = data.todos;
      //   totalTodos.push([...todos]);
      totalTodos = [...totalTodos, ...todos];
      console.log(todos, totalTodos);
      return todos;
    });
};

let todos = document.createElement("div");

function appendTodos() {
  console.log("called appendTodos",totalTodos.length);
  for (let todo of totalTodos) {
    let todo1 = document.createElement("div");

    let todoContent = document.createElement("p");
    todoContent.innerHTML = todo.todo;
    todo.appendChild(todoContent);

    let todoStatus = document.createElement("p");
    todoStatus.innerHTML = todo.completed;
    todo.appendChild(todoStatus);
    todos.innerHTML = todo1;
  }
}

let moreButton = document.createElement("button"); //.innerHTML('More')
moreButton.innerHTML = "More";

async function intialRender() {
  await fetchResults();
  appendTodos();
}
intialRender()
moreButton.onclick = () => {
  console.log("clicking", totalTodos);
  totalTodos;
  fetchResults();
  appendTodos();
};

rootElement.appendChild(moreButton);

rootElement.appendChild(todos);

{
  /* <div>
    <h1>Todo</h1>
    <h1>status</h1>
</div> */
}

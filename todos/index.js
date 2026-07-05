const rootElement = document.getElementById("root");

let totalTodos = [];

const fetchResults = (skip = 0) => {
  return fetch(`https://dummyjson.com/todos?limit=20&skip=${totalTodos.length}`)
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
todos.id = 'todos container'
Object.assign(todos.style, {
  display: "flex",
  gap: "10px",
  flexDirection: "column",
  marginTop: "20px",
});

function appendTodos(skip = 0) {
  console.log("called appendTodos", skip, totalTodos.length);
  for (let k = skip; k < totalTodos.length; k++) {
    let todo = totalTodos[k];
    let todo1 = document.createElement("div");

    Object.assign(todo1.style,{
        backgroundColor:'white',
        border:'1px solid black',
        padding:'10px'
    });

    let srNumber = document.createElement("p");
    srNumber.innerHTML = todo.id;
    todo1.appendChild(srNumber);

    let todoContent = document.createElement("p");
    todoContent.innerHTML = todo.todo;
    todo1.appendChild(todoContent);

    let todoStatus = document.createElement("p");
    todoStatus.innerHTML = todo.completed ? "Compoleted" : "Pending";
    todoStatus.style.color = todo.completed ? "green" : "red";

    todo1.appendChild(todoStatus);

    todos.appendChild(todo1);
  }
}

let moreButton = document.createElement("button"); //.innerHTML('More')
moreButton.innerHTML = "More";

rootElement.appendChild(todos);

async function intialRender() {
  await fetchResults();
  appendTodos();
  moreButton.id = "moreButton";
  rootElement.appendChild(moreButton);
}

intialRender();

moreButton.onclick = async () => {
  totalTodos;
  await fetchResults();
  appendTodos(totalTodos.length - 20);
  if (totalTodos.length > 99) {
    rootElement.removeChild(moreButton);
  }
};


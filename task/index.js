const todos = [];

const todoItemStyles = {
  display: "flex",
  gap: "5px",
};

const inputElement = document.getElementById("input");

function addTodo() {
  const newTodo = {
    todo: String(inputElement.value).toUpperCase(),
    isCompleted: false,
  };
  todos.push(newTodo);
  console.log(todos);
  renderTodos(newTodo);
  inputElement.value = "";
}

const todosContainer = document.getElementById("todosContainer");

function renderTodos(newTodoItem) {
  const todoItem = document.createElement("div");

  Object.assign(todoItem.style, todoItemStyles);

  const todo = document.createElement("p");
  todo.textContent = newTodoItem.todo;
  todoItem.appendChild(todo);

  const todoStatus = document.createElement("p");
  todoStatus.textContent = newTodoItem.isCompleted ? "Completed" : "Pending";
  todoItem.appendChild(todoStatus);

  todosContainer.appendChild(todoItem);
}

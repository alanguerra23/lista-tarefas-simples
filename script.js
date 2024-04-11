const taskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value;

  if (taskText !== "") {
    const taskItem = document.createElement("li");
    const taskSpan = document.createElement("span");
    const deleteButton = document.createElement("button");

    taskSpan.textContent = taskText;
    deleteButton.textContent = "Remover";

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    deleteButton.addEventListener("click", removeTask);
    taskInput.value = "";
  }
}

function removeTask() {
  const taskItem = this.parentNode;
  taskList.removeChild(taskItem);
}

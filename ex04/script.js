const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");
let taskCount = 0;

function updateTaskCounter() {
  taskCounter.textContent = "Total tasks: " + taskCount;
}

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const li = document.createElement("li");
  const label = document.createElement("span");
  const deleteButton = document.createElement("button");

  label.textContent = taskText;
  deleteButton.textContent = "Delete";
  deleteButton.type = "button";

  li.appendChild(label);
  li.appendChild(deleteButton);

  li.addEventListener("click", function (event) {
    if (event.target === deleteButton) {
      return;
    }
    li.classList.toggle("completed");
  });

  deleteButton.addEventListener("click", function () {
    li.remove();
    taskCount -= 1;
    updateTaskCounter();
  });

  taskList.appendChild(li);
  taskCount += 1;
  updateTaskCounter();

  taskInput.value = "";
  taskInput.focus();
}

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

updateTaskCounter();

const todoList = document.querySelector(".task-list");
const filterOption = document.querySelector("#filter");
const form = document.querySelector(".form");
const taskInput = document.querySelector("#newitem");

function markDone(todoLi) {
  todoLi.classList.toggle("done");
}
function removeTask(todoLi) {
  todoLi.classList.add("fall");
  todoLi.addEventListener("transitionend", () => {
    todoLi.remove();
  });
}
function filterTasks(hideCompletedTasks) {
  todoList.querySelectorAll("li").forEach((todoLi) => {
    if (todoLi.classList.contains("done")) {
      todoLi.style.display = hideCompletedTasks ? "none" : "flex";
    }
  });
}

//mark done feature & remove Task
todoList.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList[1] === "btn-action-done") {
    markDone(element.parentNode.parentNode);
  } else if (element.classList[1] === "btn-action-delete") {
    removeTask(element.parentNode.parentNode);
  }
  console.log(element);
});

//filter task
filterOption.addEventListener("click", (e) => {
  filterTasks(e.target.checked);
});
// add a new task
function addTask(taskLabel) {
  const todoLi = document.createElement("li");

  const labelSpan = document.createElement("span");
  labelSpan.className = "label";
  labelSpan.textContent = taskLabel;
  todoLi.appendChild(labelSpan);

  const actionDiv = document.createElement("div");
  actionDiv.className = "actions";
  actionDiv.innerHTML = `<input type="checkbox" class="btn-action btn-action-done">
      <button class="btn-action btn-action-delete">✖</button>`;
  todoLi.appendChild(actionDiv);

  todoList.appendChild(todoLi);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskLabel = taskInput.value.trim();
  if (taskLabel) {
    addTask(taskLabel);
    taskInput.value = "";
  }
});

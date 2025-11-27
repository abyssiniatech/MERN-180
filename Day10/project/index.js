const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.className = "flex justify-between items-center bg-gray-100 p-2 rounded-lg";

  li.innerHTML = `
    <span onclick="toggleComplete(this)" class="cursor-pointer">
      ${taskText}
    </span>
    <button onclick="deleteTask(this)" class="text-red-500 hover:text-red-700">
      ✖
    </button>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function deleteTask(button) {
  button.parentElement.remove();
}

function toggleComplete(span) {
  span.classList.toggle("line-through");
  span.classList.toggle("text-gray-500");
}

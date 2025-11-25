let tasks = [];

const addTask = () => {
  const input = document.getElementById("taskInput");
  const task = input.value;

  if (!task) return alert("Enter a task");

  tasks = [...tasks, task];
  input.value = "";
  renderTasks();
};

const renderTasks = () => {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    list.innerHTML += `
      <li>
        ${task}
        <button onclick="deleteTask(${index})">Delete</button>
      </li>
    `;
  });
};

const deleteTask = index => {
  tasks = tasks.filter((_, i) => i !== index);
  renderTasks();
};



// // Select elements
// const todoInput = document.getElementById("todo-input");
// const addTodoBtn = document.getElementById("add-todo");
// const todoList = document.getElementById("todo-list");

// // Store todos
// let todos = [];
// let filter = "all";

// // Add Todo function
// function handleAddTodo() {
//   const todoText = todoInput.value.trim();

//   if (todoText === "") {
//     alert("Please enter a task");
//     return;
//   }

//   const newTodo = {
//     id: Date.now(),
//     text: todoText,
//     completed: false
//   };

//   todos.push(newTodo);
//   todoInput.value = "";
//   renderTodos();
// }

// // Render Todos
// function renderTodos() {
//   todoList.innerHTML = "";

//   const filteredTodos = getFilteredTodos();

//   filteredTodos.forEach(todo => {
//     const li = document.createElement("li");
//     li.className = "flex justify-between items-center bg-gray-100 p-2 rounded";

//     const span = document.createElement("span");
//     span.textContent = todo.text;

//     if (todo.completed) {
//       span.classList.add("line-through");
//     }

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "❌";
//     deleteBtn.className = "text-red-500";

//     const completeBtn = document.createElement("button");
//     completeBtn.textContent = "✅";
//     completeBtn.className = "text-green-500 mr-2";

//     // Toggle complete
//     completeBtn.addEventListener("click", () => {
//       todo.completed = !todo.completed;
//       renderTodos();
//     });

//     // Delete todo
//     deleteBtn.addEventListener("click", () => {
//       todos = todos.filter(t => t.id !== todo.id);
//       renderTodos();
//     });

//     li.appendChild(span);

//     const btnBox = document.createElement("div");
//     btnBox.appendChild(completeBtn);
//     btnBox.appendChild(deleteBtn);

//     li.appendChild(btnBox);
//     todoList.appendChild(li);
//   });
// }

// // Filter function
// function getFilteredTodos() {
//   if (filter === "completed") {
//     return todos.filter(todo => todo.completed);
//   } else if (filter === "pending") {
//     return todos.filter(todo => !todo.completed);
//   }
//   return todos;
// }

// // Button event
// addTodoBtn.addEventListener("click", handleAddTodo









document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("itemInput");
  const addBtn = document.getElementById("addBtn");
  const list = document.getElementById("todo-list");
    console.log(list);
  let editMode = false;
  let currentItem = null;

  // ADD or UPDATE item
  addBtn.addEventListener("click", function () {
    const text = input.value.trim();

    if (text === "") {
      alert("Please enter something");
      return;
    }

    if (editMode) {
      // UPDATE logic
      currentItem.firstChild.textContent = text;
      addBtn.textContent = "Add";
      editMode = false;
      currentItem = null;
    } else {
      // CREATE logic
      const li = document.createElement("li");
      li.style.marginBottom = "8px";
      li.style.backgroundColor = "#f9f9f9";
        li.style.padding = "8px";
        li.style.fontSize = "16px";
        li.style.border = "1px solid #ddd";
        li.style.borderRadius = "4px";
        li.style.padding = "10px";
        li.style.listStyleType = "disc";
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
    
      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.style.marginLeft = "10px";
      editBtn.style.marginRight = "5px";
      editBtn.style.padding = "4px 8px";
      editBtn.style.backgroundColor = "#4CAF50";
        editBtn.style.color = "white";
        editBtn.style.border = "none";
         editBtn.style.borderRadius = "4px";
        const span = document.createElement("span");
        span.textContent = text;
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.style.marginLeft = "5px";
        deleteBtn.style.padding = "4px 8px";
        deleteBtn.style.backgroundColor = "#f44336";
        deleteBtn.style.color = "white";
        deleteBtn.style.border = "none";
        deleteBtn.style.borderRadius = "4px";

      li.appendChild(span);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);
      list.appendChild(li);

      // DELETE logic
      deleteBtn.addEventListener("click", function () {
        li.remove();
      });

      // EDIT logic
      editBtn.addEventListener("click", function () {
        input.value = span.textContent;
        addBtn.textContent = "Update";

        editMode = true;
        currentItem = li;
      });
    }

    input.value = "";
  });
});

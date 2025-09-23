// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task Event
addTaskBtn.addEventListener("click", addTask);

// Allow Enter Key to add task
taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.className = "task-item";
  li.textContent = taskText;

  // Toggle completion on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Create remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";
  removeBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent triggering complete toggle
    li.remove();
  });

  // Append remove button to task
  li.appendChild(removeBtn);

  // Append task to list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}

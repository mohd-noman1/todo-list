// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get references to elements
    const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");
  
    // Add button click event
    addBtn.addEventListener("click", function () {
      const task = taskInput.value.trim(); // remove extra spaces
  
      if (task !== "") {
        const li = document.createElement("li"); // create <li>
        li.textContent = task; // set text
  
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
          taskList.removeChild(li); // remove task
        });
  
        li.appendChild(deleteBtn); // add delete button to li
        taskList.appendChild(li);  // add li to ul
  
        taskInput.value = ""; // clear input
      }
    });
  });
  
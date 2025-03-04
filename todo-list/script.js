// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Get the task text and trim whitespace
    const taskText = taskInput.value.trim();

    // Check if the input is not empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new list item
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="removeTask(this)">Delete</button>
    `;

    // Append the new task to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
    taskInput.focus();
}

// Function to remove a task
function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

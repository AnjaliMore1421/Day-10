// Retrieve saved tasks from localStorage
// Convert stored string data into array using JSON.parse()
// If no tasks exist, initialize with an empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

/*
    Function: saveTasks()
    Purpose: Save the updated tasks array into localStorage
*/
function saveTasks() {
    // Convert array into string format and store it
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

/*
    Function: displayTasks(filteredTasks = tasks)
    Purpose: Display all tasks or filtered tasks on the screen
*/
function displayTasks(filteredTasks = tasks) {
    // Select the task list container
    let taskList = document.getElementById("taskList");

    // Clear existing list before re-rendering
    taskList.innerHTML = "";

    // Loop through each task
    filteredTasks.forEach((task, index) => {
        // Create a new list item
        let li = document.createElement("li");

        // Add task text with Edit and Delete buttons
        li.innerHTML = `
            <span>${task}</span>
            <div class="actions">
                <!-- Edit button -->
                <button onclick="editTask(${index})">Edit</button>

                <!-- Delete button -->
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        // Append task item to the list
        taskList.appendChild(li);
    });
}

/*
    Function: addTask()
    Purpose: Add a new task to the array and localStorage
*/
function addTask() {
    // Select input field
    let input = document.getElementById("taskInput");

    // Get user-entered text and remove extra spaces
    let taskText = input.value.trim();

    // Validate empty input
    if (taskText === "") {
        alert("Please enter a task");
        return; // Stop execution
    }

    // Add new task into tasks array
    tasks.push(taskText);

    // Save updated tasks
    saveTasks();

    // Clear input field after adding
    input.value = "";

    // Refresh displayed task list
    displayTasks();
}

/*
    Function: editTask(index)
    Purpose: Edit a task using its index position
*/
function editTask(index) {
    // Open prompt box with current task text
    let updatedTask = prompt("Edit your task:", tasks[index]);

    // Check if user entered valid text
    if (updatedTask !== null && updatedTask.trim() !== "") {
        // Update the selected task
        tasks[index] = updatedTask.trim();

        // Save changes
        saveTasks();

        // Refresh UI
        displayTasks();
    }
}

/*
    Function: deleteTask(index)
    Purpose: Remove selected task
*/
function deleteTask(index) {
    // Remove one task from the array using index
    tasks.splice(index, 1);

    // Save updated tasks
    saveTasks();

    // Refresh UI
    displayTasks();
}

/*
    Function: searchTask()
    Purpose: Search and filter tasks dynamically
*/
function searchTask() {
    // Get search input value and convert to lowercase
    let searchValue = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    // Filter tasks that match the search text
    let filteredTasks = tasks.filter(task =>
        task.toLowerCase().includes(searchValue)
    );

    // Display filtered results
    displayTasks(filteredTasks);
}

/*
    Function: sortTasks()
    Purpose: Sort tasks alphabetically
*/
function sortTasks() {
    // Sort tasks in ascending alphabetical order
    tasks.sort();

    // Save sorted tasks
    saveTasks();

    // Refresh UI
    displayTasks();
}

/*
    Initial load
    Purpose: Display tasks when page loads
*/
displayTasks();

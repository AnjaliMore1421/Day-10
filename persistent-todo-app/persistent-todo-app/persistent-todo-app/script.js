// Retrieve tasks from localStorage
// localStorage stores data as string, so convert it back to array using JSON.parse()
// If no tasks are found, initialize with an empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

/*
    Function: saveTasks()
    Purpose: Save the updated tasks array into localStorage
*/
function saveTasks() {
    // Convert tasks array into string format and store it
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

/*
    Function: displayTasks()
    Purpose: Show all tasks on the webpage
*/
function displayTasks() {
    // Select the unordered list where tasks will be displayed
    let taskList = document.getElementById("taskList");

    // Clear previous tasks before re-rendering
    taskList.innerHTML = "";

    // Loop through each task in the array
    tasks.forEach((task, index) => {
        // Create a new list item element
        let li = document.createElement("li");

        // Add task text and action buttons inside the list item
        li.innerHTML = `
            <span>${task}</span>
            <div class="actions">
                <!-- Edit button calls editTask function -->
                <button onclick="editTask(${index})">Edit</button>

                <!-- Delete button calls deleteTask function -->
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        // Add the list item to the task list
        taskList.appendChild(li);
    });
}

/*
    Function: addTask()
    Purpose: Add a new task to the list
*/
function addTask() {
    // Get input field element
    let input = document.getElementById("taskInput");

    // Get trimmed input value (removes extra spaces)
    let taskText = input.value.trim();

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task");
        return; // Stop function execution
    }

    // Add new task into tasks array
    tasks.push(taskText);

    // Save updated tasks into localStorage
    saveTasks();

    // Clear input field after adding task
    input.value = "";

    // Refresh displayed task list
    displayTasks();
}

/*
    Function: editTask(index)
    Purpose: Edit an existing task using its index
*/
function editTask(index) {
    // Show prompt box with current task text
    let updatedTask = prompt("Edit your task:", tasks[index]);

    // Check if user clicked OK and input is not empty
    if (updatedTask !== null && updatedTask.trim() !== "") {
        // Update task in array
        tasks[index] = updatedTask.trim();

        // Save updated tasks
        saveTasks();

        // Refresh task list
        displayTasks();
    }
}

/*
    Function: deleteTask(index)
    Purpose: Delete task using its index
*/
function deleteTask(index) {
    // Remove one task from the given index
    tasks.splice(index, 1);

    // Save updated array
    saveTasks();

    // Refresh task list
    displayTasks();
}

/*
    Initial function call
    Purpose: Display saved tasks when page loads
*/
displayTasks();

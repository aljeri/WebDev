function addTask() {
    // Get the task input field and the task list
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    // Create a new list item and set its text content to the input value
    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
    
    // Add a click event listener to remove the task when clicked
    newTask.onclick = function() {
        taskList.removeChild(newTask);
    };
    
    // Append the new task to the task list and clear the input field
    
    taskList.appendChild(newTask);
    taskInput.value = '';
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Query for submit button and input task field
    const submit = document.querySelector('#submitTask');
    const newTask = document.querySelector('#taskInput');
    const taskList = document.querySelector('#taskList');

    // Disable the submit button by default
    submit.disabled = true;

    // Listen for input in the task field
    newTask.addEventListener('input', () => {
        // Enable submit button only if there's text in the input
        submit.disabled = newTask.value.trim() === '';
    });

    // Listen for form submission
    document.querySelector('form').addEventListener('submit', (event) => {
        // Prevent the default form submission
        event.preventDefault();

        // Get the task the user submitted
        const taskText = newTask.value.trim();

        // Only proceed if there's actual text
        if (taskText) {
            // Create a new list item
            const listItem = document.createElement('li');
            
            // Create a text node with the task
            const taskTextNode = document.createTextNode(taskText);
            
            // Add the text to the list item
            listItem.appendChild(taskTextNode);
            
            // Add the new list item to the unordered list
            taskList.appendChild(listItem);

            // Clear the input field
            newTask.value = '';

            // Disable submit button again
            submit.disabled = true;
        }

        // Return false to prevent default form submission
        return false;
    });
});
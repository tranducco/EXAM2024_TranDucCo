
    const taskInput = document.getElementById('taskInput');
    const btnAdd = document.getElementById('btnAdd');
    const errorMessage = document.getElementById('error-message');

    btnAdd.addEventListener('click', function(event) {

const taskValue = taskInput.value.trim();
        if (taskValue === '') {
            errorMessage.textContent = 'Task name cannot be empty!';
            errorMessage.style.display = 'block'; 
            taskInput.style.borderColor = 'red'; 
        } 
        else if (taskValue.length > 100) {
            errorMessage.textContent = 'Task name must not exceed 100 characters!';
            errorMessage.style.display = 'block';
            taskInput.style.borderColor = 'red';
        } 
        else {
            errorMessage.style.display = 'none'; 
            taskInput.style.borderColor = '#e3e6f0'; 
            alert('Task added successfully: ' + taskValue);
            taskInput.value = '';
        }
    });

// Select elements
const taskInput = document.getElementById('text-input');
const addTaskButton = document.getElementById('task-button');
const taskList = document.getElementById('task-list');
const removeButton = document.getElementById('remove-button');

// Add a new task to the list
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.addEventListener('click', toggleTask);
        taskList.appendChild(li);
        taskInput.value = '';
        toggleRemoveButton();
    }

    else {
        alert('Type a task before adding.');
    }
}

// Mark a task as completed or incomplete
function toggleTask() {
    this.classList.toggle('completed');
}

function toggleRemoveButton() {
    if(taskList.children.length > 0) {
        removeButton.style.display = 'flex';
    }

    else {
        removeButton.style.display = 'none';
    }
}

// Remove all completed tasks
function removeCompletedTasks() {
    const completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach(task => task.remove());
}

// Event listeners
addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

removeButton.addEventListener('click', removeCompletedTasks);
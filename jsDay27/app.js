let tasks = [];

document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;

    const task = { title, description, dueDate };
    tasks.push(task);

    displayTasks();
    this.reset();
});

function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const taskDetails = document.createElement('div');
        taskDetails.classList.add('task-details');
        taskDetails.innerHTML = `<strong>${task.title}</strong><br>${task.description}<br><small>Due: ${task.dueDate}</small>`;

        const taskButtons = document.createElement('div');
        taskButtons.classList.add('task-buttons');

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => editTask(index));

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTask(index));

        taskButtons.appendChild(editBtn);
        taskButtons.appendChild(deleteBtn);

        taskItem.appendChild(taskDetails);
        taskItem.appendChild(taskButtons);

        taskList.appendChild(taskItem);
    });
}

function editTask(index) {
    const task = tasks[index];
    document.getElementById('title').value = task.title;
    document.getElementById('description').value = task.description;
    document.getElementById('due-date').value = task.dueDate;

    deleteTask(index);
}

function deleteTask(index) {
    const confirmDelete = confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
        tasks.splice(index, 1);
        displayTasks();
    }
}
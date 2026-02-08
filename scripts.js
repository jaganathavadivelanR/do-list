document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const dateTimeInput = document.getElementById('date-time-input');

    const taskText = taskInput.value.trim();
    const dateTimeValue = dateTimeInput.value;

    if (taskText === '' || dateTimeValue === '') {
        alert('Please enter both task and date/time.');
        return;
    }

    const taskList = document.getElementById('task-list');

    const listItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = `${taskText} (Due: ${new Date(dateTimeValue).toLocaleString()})`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
    dateTimeInput.value = '';
}

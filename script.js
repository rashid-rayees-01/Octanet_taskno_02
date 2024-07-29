function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span onclick="toggleComplete(this)">${taskText}</span>
            <span class="remove" onclick="removeTask(this)">x</span>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function removeTask(element) {
    const li = element.parentElement;
    li.remove();
}

function toggleComplete(element) {
    element.classList.toggle('completed');
}

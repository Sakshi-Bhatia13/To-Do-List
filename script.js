const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');

addButton.addEventListener('click', addTask);

function addTask() {
    const task = taskInput.value;
    if (task.trim() !== '') {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(task));
        
        // Add a delete button to each task
        const deleteButton = document.createElement('button');
        deleteButton.innerText = '❌';
        deleteButton.classList.add('deleteButton');
        deleteButton.addEventListener('click', function () {
            li.remove();
        });
        
        li.appendChild(deleteButton);
        todoList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}

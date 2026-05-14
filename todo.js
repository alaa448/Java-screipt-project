
let tasks = [];
function addTask() {
    let input = document.getElementById('taskInput');
    let taskText = input.value.trim();
    
    if (taskText === '') {
        alert('  Enter task!');
        return;
    }
    tasks.push({
        id: Date.now(),
        text: taskText
    });
    
    input.value = '';
    renderTasks();
}
function renderTasks() {
    let list = document.getElementById('taskList');
    list.innerHTML = '';
    
    tasks.forEach(function(task) {
        let li = document.createElement('li');
        li.innerHTML = `
            <span>${task.text}</span>
            <button onclick="deleteTask(${task.id})">Delet</button>
        `;
        list.appendChild(li);
    });
}

function deleteTask(id) {
    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });
    renderTasks();
}
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
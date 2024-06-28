document.addEventListener('DOMContentLoaded' , () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    let tasks = [];

    taskForm.addEventListener('submit' , (e) => {
        e.preventDefault();
        const taskName = document.getElementById('task-name').value;
        const taskCategory = document.getElementById('task-category').value;
        const taskDate = document.getElementById('task-date').value;


        const task = {
            id: Date.now(),
            name: taskName,
            category: taskCategory,
            date: taskDate,
            completed: false
        };

        tasks.push(task);
        displayTasks();
        taskForm.reset();
    });

    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.classList.add('task');
            if (task.completed) taskElement.classList.add('completed');

            taskElement.innerHTML = `
            <span> ${task.name} (${task.category}) - ${task.date}</span>
            <div>
            <button onclick="toggleComplete(${task.id})">Complete</button>
                    <button onclick="deleteTask(${task.id})">Delete</button>
                </div>
                `;

                taskList.appendChild(taskElement);
        });
    }
    window.toggleComplete = (id) => {
        tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
        displayTasks();
    };

    window.deleteTask = (id) => {
        tasks = tasks.filter(task => task.id !== id);
        displayTasks();
    };


});
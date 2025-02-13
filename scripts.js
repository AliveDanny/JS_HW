let clickme = document.querySelector('.todolist-header')
clickme.addEventListener('click', function GetToDoList (event) {
    const container = document.getElementById('todoContainer');

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Type your task';
    container.appendChild(input);

    const taskList = document.createElement('div');
    container.appendChild(taskList);

    input.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && input.value) {
            const taskText = input.value;
            input.value = '';

            const task = document.createElement('div');
            task.className = 'task';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'checkbox';

            const taskLabel = document.createElement('span');
            taskLabel.textContent = taskText;

            checkbox.addEventListener('change', function () {
                task.classList.toggle('completed', checkbox.checked);
            });

            task.appendChild(checkbox);
            task.appendChild(taskLabel);
            taskList.appendChild(task);
        }
    });
    
}, {once: true})





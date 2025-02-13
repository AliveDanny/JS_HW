function ToDoList() {
    const container = document.getElementById('todoContainer');
    
    // Создаем заголовок
    const title = document.createElement('h2');
    title.textContent = 'Список задач';
    container.appendChild(title);
    
    // Создаем поле ввода задач
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Введите задачу и нажмите Enter';
    container.appendChild(input);

    // Создаем список задач
    const taskList = document.createElement('div');
    container.appendChild(taskList);

    // Обработчик события для ввода задачи
    input.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && input.value) {
            const taskText = input.value;
            input.value = '';

            // Создаем элемент задачи
            const task = document.createElement('div');
            task.className = 'task';

            // Создаем чекбокс
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'checkbox';

            // Добавляем текст задачи
            const taskLabel = document.createElement('span');
            taskLabel.textContent = taskText;

            // Обработчик события для чекбокса
            checkbox.addEventListener('change', function () {
                task.classList.toggle('completed', checkbox.checked);
            });

            // Составляем задачу
            task.appendChild(checkbox);
            task.appendChild(taskLabel);
            taskList.appendChild(task);
        }
    });
}

// Вызываем функцию, чтобы создать список задач на странице
ToDoList();

export function task() {
    const taskAdded = this.inputTask.value;
        if (taskAdded !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskAdded;

            const deleteButton = this.createButton('Delete', 'deleteButton');
            deleteButton.addEventListener('click', () => this.list.removeChild(listItem));

            const completed = this.createButton('completed?', 'completeButton');
            completed.addEventListener('click', () => listItem.style.color = 'red');

            const important = this.createButton('important', 'importantButton');
            important.addEventListener('click', () => listItem.style.fontWeight = 'bold');

            listItem.appendChild(deleteButton);
            listItem.appendChild(completed);
            listItem.appendChild(important);
            this.list.appendChild(listItem);

            this.inputTask.value = '';
        } else {
            alert('Please enter a task.');
        }
}
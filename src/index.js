import "./styles.css";
class TaskList {
    constructor() {
        this.listArea = document.getElementById('listArea');
        this.list = document.createElement('div');
        this.list.classList.add('list');
        this.listArea.appendChild(this.list);

        this.createTitle('list', 'listHeader');

        this.inputTask = this.createInput('Enter your task...', 'text', 'taskValue', 'block');
        this.list.appendChild(this.inputTask);

        this.submitTask = this.createButton('Add', 'submitTask');
        this.submitTask.addEventListener('click', this.addTask);
        this.list.appendChild(this.submitTask);

        this.deleteList();
    }

    createInput(placeholder, type, id, displayDefault) {
        const input = document.createElement('input');
        input.placeholder = placeholder;
        input.type = type;
        input.id = id;
        input.style.display = displayDefault;
        this.list.appendChild(input);
        return input;
    }

    createButton(text, id) {
        const button = document.createElement('button');
        button.textContent = text;
        button.id = id;
        return button;
    }

    createTitle(text, id) {
        const newListName = document.createElement('p');
        newListName.classList.add('newListName');
        newListName.textContent = 'default list name'
        this.list.appendChild(newListName);
    
        const changeNameText = document.createElement('p');
        changeNameText.classList.add('newListName');
        changeNameText.textContent = 'want to change list name?'
        this.list.appendChild(changeNameText);
    
        const listName = this.createInput('write your list name', 'text', 'listName', 'none');
        this.list.appendChild(listName);
    
        const submitButton = this.createButton('submit list name', 'submitListName');
        submitButton.style.display = 'none';
        this.list.appendChild(submitButton);
    
        changeNameText.addEventListener('click', () => {
            submitButton.style.display = 'block';
            listName.style.display = 'block';
        });
    
        submitButton.addEventListener('click', () => {
            const listTitle = this.list.querySelector('#listName');
            newListName.textContent = listTitle.value;
            listTitle.value = '';
            submitButton.style.display = 'none';
            listName.style.display = 'none';
        });
    }
    

    addTask = () => {
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

    deleteList() {
        const deleteWholeButton = this.createButton('delete list?', 'deleteList');
        deleteWholeButton.addEventListener('click', () => this.listArea.removeChild(this.list));

        this.list.appendChild(deleteWholeButton);
    }
}

const createList = document.createElement('button');
createList.classList.add('createList');
createList.textContent = 'create list';
totalListOptionBar.appendChild(createList);

createList.addEventListener('click', () => {
    new TaskList();
});
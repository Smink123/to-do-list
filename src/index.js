import "./styles.css";

const listArea = document.getElementById('listArea')

class TaskList {
    constructor() {
        this.list = document.createElement('div');
        this.list.classList.add('list');
        listArea.appendChild(this.list);

        this.title = document.createElement('div');
        this.title.classList.add('title');
        this.list.appendChild(this.title)

        this.nameArea = document.createElement('div');
        this.nameArea.classList.add('nameArea');
        this.list.appendChild(this.nameArea);

        this.nameChangeArea = document.createElement('div');
        this.nameChangeArea.style.display = 'none';
        this.nameChangeArea.classList.add('nameChangeArea');

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
        this.title.appendChild(newListName);
    
        const changeNameText = document.createElement('p');
        changeNameText.classList.add('newListNameTitle');
        changeNameText.textContent = 'change name'
        this.nameArea.appendChild(changeNameText);
    
        const listName = this.createInput('write your list name', 'text', 'listName', 'none');
        this.nameChangeArea.appendChild(listName);
    
        const submitButton = this.createButton('→', 'submitListName');
        submitButton.style.display = 'none';
        this.nameChangeArea.appendChild(submitButton);

        this.nameArea.appendChild(this.nameChangeArea)
    
        changeNameText.addEventListener('click', () => {
            this.nameChangeArea.style.display = 'flex';
            this.nameChangeArea.style.maxWidth = '100%';
            this.nameChangeArea.style.minWidth = '100%';
            changeNameText.style.display = 'none'
            submitButton.style.display = 'block';
            listName.style.display = 'block';
        });
    
        submitButton.addEventListener('click', () => {
            const listTitle = this.list.querySelector('#listName');
            newListName.textContent = listTitle.value;
            listTitle.value = '';
            submitButton.style.display = 'none';
            listName.style.display = 'none';
            this.nameChangeArea.style.display = 'none';
            changeNameText.style.display = 'block'
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
        const deleteWholeButton = this.createButton('x', 'deleteList');
        deleteWholeButton.addEventListener('click', () => listArea.removeChild(this.list));

        this.title.appendChild(deleteWholeButton);
    }
}

const noItemsToShow = document.getElementById('noItems')

const createList = document.createElement('button');
createList.classList.add('createList');
createList.textContent = '+ new list';
totalListOptionBar.appendChild(createList);

createList.addEventListener('click', () => {
    noItemsToShow.style.display = 'none'
    new TaskList();
});


import "./styles.css";

const listArea = document.getElementById("listArea");

class TaskList {
  constructor() {

    this.list = document.createElement("div");
    this.list.classList.add("list");
    this.list.style.background = listBackground(gradientOptions);
    listArea.appendChild(this.list);

    this.title = this.creatingElement('div', 'title', '', this.list)

    this.nameArea = this.creatingElement('div', 'nameArea', '', this.list)

    this.nameChangeArea = document.createElement("div");
    this.nameChangeArea.style.display = "none";
    this.nameChangeArea.classList.add("nameChangeArea");

    this.createTitle("list", "listHeader");

    this.inputTaskArea = this.creatingElement('div', 'inputTaskArea', '', this.list)

    this.inputTask = this.createInput(
      "enter your task...",
      "text",
      "taskValue",
      "block"
    );
    this.inputTaskArea.appendChild(this.inputTask);

    this.submitTask = this.createButton("+", "submitTask");
    this.submitTask.classList.add("submitTask");
    this.submitTask.addEventListener("click", this.addTask);
    this.inputTaskArea.appendChild(this.submitTask);

    this.deleteList();
  }

  creatingElement(elementType, className, id, parentElement) {
    const newElement = document.createElement(elementType);
    newElement.classList.add(className);
    if (id !== '') {
      newElement.id = id;
    }
    parentElement.appendChild(newElement);
    return newElement;
  }

  createInput(placeholder, type, id, displayDefault) {
    const input = document.createElement("input");
    input.placeholder = placeholder;
    input.type = type;
    input.id = id;
    input.style.display = displayDefault;
    this.list.appendChild(input);
    return input;
  }

  createButton(text, id) {
    const button = document.createElement("button");
    button.textContent = text;
    button.id = id;
    return button;
  }

  createTitle(text, id) {
    const newListName = document.createElement("p");
    newListName.classList.add("newListName");
    newListName.textContent = "default list name";
    this.title.appendChild(newListName);

    const changeNameText = document.createElement("p");
    changeNameText.classList.add("newListNameTitle");
    changeNameText.textContent = "change name";
    this.nameArea.appendChild(changeNameText);

    const listName = this.createInput(
      "write your list name",
      "text",
      "listName",
      "none"
    );
    this.nameChangeArea.appendChild(listName);

    const submitButton = this.createButton("→", "submitListName");
    submitButton.style.display = "none";
    this.nameChangeArea.appendChild(submitButton);

    this.nameArea.appendChild(this.nameChangeArea);

    changeNameText.addEventListener("click", () => {
      this.nameChangeArea.style.display = "flex";
      this.nameChangeArea.style.maxWidth = "100%";
      this.nameChangeArea.style.minWidth = "100%";
      changeNameText.style.display = "none";
      submitButton.style.display = "block";
      listName.style.display = "block";
    });

    submitButton.addEventListener("click", () => {
      const listTitle = this.list.querySelector("#listName");
      newListName.textContent = listTitle.value;
      listTitle.value = "";
      submitButton.style.display = "none";
      listName.style.display = "none";
      this.nameChangeArea.style.display = "none";
      changeNameText.style.display = "block";
    });
  }

  addTask = () => {
    const taskAdded = this.inputTask.value;
    if (taskAdded !== "") {
      const listItem = document.createElement("li");
      listItem.classList.add("listItem");
      listItem.textContent = taskAdded;

      const itemButtons = document.createElement("div");
      itemButtons.classList.add("itemButtons");

      const deleteButton = this.createButton("delete", "deleteButton");
      deleteButton.addEventListener("click", () => {
        this.list.removeChild(itemButtons);
        this.list.removeChild(listItem);
      });
      let complete = false;
      const completed = this.createButton("completed", "completeButton");
      completed.addEventListener("click", () => {
        if (complete === false) {
          listItem.style.textDecoration = "line-through";
          completed.textContent = "incomplete";
        } else {
          listItem.style.textDecoration = "none";
          completed.textContent = "complete";
        }
        complete = !complete;
      });

      let importantTask = true;
      const important = this.createButton("important", "importantButton");
      important.addEventListener("click", () => {
        if (importantTask === false) {
          listItem.style.fontWeight = "100";
          important.textContent = "important";
        } else {
          listItem.style.fontWeight = "bold";
          important.textContent = "not important";
        }
        importantTask = !importantTask;
      });

      this.list.appendChild(listItem);
      this.list.appendChild(itemButtons);
      itemButtons.appendChild(deleteButton);
      itemButtons.appendChild(completed);
      itemButtons.appendChild(important);

      this.inputTask.value = "";
    } else {
      this.inputTask.placeholder = "enter your task...";
    }
  };

  deleteList() {
    const deleteWholeButton = this.createButton("x", "deleteList");
    deleteWholeButton.addEventListener("click", () => {
      listArea.removeChild(this.list);
      toggleNoListText(); // Call the function after removing the list
    });
    this.title.appendChild(deleteWholeButton);
  }
}

const noItemsToShow = document.getElementById("noItems");

const bottomRowBar = document.createElement("div");
bottomRowBar.classList.add("bottomRowBar");
totalListOptionBar.appendChild(bottomRowBar);

const createList = document.createElement("button");
createList.classList.add("createList");
createList.textContent = "+ new list";
bottomRowBar.appendChild(createList);

const dateTime = document.createElement("p");
dateTime.classList.add("dateTime");
dateTime.textContent = getTime();
bottomRowBar.appendChild(dateTime);

createList.addEventListener("click", () => {
  new TaskList();
  toggleNoListText();
});

//selects all elements with a class of '.list' within the listArea + returns a NodeList.
function toggleNoListText() {
  const lists = listArea.querySelectorAll(".list");
  if (lists.length === 0) {
    noItemsToShow.style.display = "block";
  } else {
    noItemsToShow.style.display = "none";
  }
}

const gradientOptions = [
  "linear-gradient(to top, #79a7b6, #a6ccd8)",
  "linear-gradient(to top, #e1c95f, #d6a69a)",
  "linear-gradient(to top, #86b1cf, #c1c7db)",
  "linear-gradient(to top, #669779, #d2c0b0)",
  "linear-gradient(to top, #acb6c0, #a7cddb)",
  "linear-gradient(to top, #b7695c, #cbaf9a)",
  "linear-gradient(to top, #c0c6dc, #90afcf)",
  "linear-gradient(to top, #79a7b6, #e0d4c7)",
];

function listBackground(colourArray) {
  colourArray.push(colourArray.shift());
  return colourArray[0];
}

function getTime() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const fullTime = `${day}.${month}.${year}`;
  return fullTime;
}

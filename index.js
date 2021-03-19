console.log('To do app homework');

const existingDiv = document.querySelector('.existing-div');
const toDoBody = document.querySelector('.to-do-body');
const inputItem = document.getElementById('new-item-input');
const addItemButton = document.getElementById('plus-image');
const user = 'avicsai';
const payload = {
    id: user,
    todo: []
};

window.addEventListener('load', getData);
addItemButton.addEventListener('click', sendToDoItem);


function getData() {
    fetch(`https://simple-json-server-scit.herokuapp.com/todo/${user}`)
    .then((r) => r.json())
    .then(renderToDoList)
    .catch(() => {})
}


function renderToDoList(response) {
    cleanToDoList();
    payload.todo = response.todo;

    if(payload.todo === undefined || payload.todo.length === 0) {
        return;
    }

    for(const element of response.todo) {
        const taskDiv = document.createElement('div');
        toDoBody.insertBefore(taskDiv, toDoBody.lastElementChild);
        taskDiv.classList.add('new-created-div');
    
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('checkbox-element');
    
        const item = document.createElement('h3');
    
        const deleteButton = document.createElement('img');
        deleteButton.setAttribute('src', '/icons/delete.png');
        deleteButton.classList.add('delete-button-image');
    
        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(item);
        taskDiv.appendChild(deleteButton);
        
        item.innerText = element.item;
        inputItem.value = '';

        if(element.checked === true) {
            checkbox.checked = true;
        }

        checkbox.addEventListener('click', function() {
            checkToDoItem(this);
            updateToDos();
        });
    
        deleteButton.addEventListener('click', function() {
            removeToDoItem(this);
        });
    }
}


function sendToDoItem() {
    if(payload.todo === undefined) {
        payload.todo = [
            {
                checked: false,
                item: inputItem.value
            }
        ];
    
        postFirstToDo();
    } else {
        payload.todo.unshift(
            {
                checked: false,
                item: inputItem.value
            }
        );
    
        updateToDos();
    }
}


function cleanToDoList() {
    const divList = document.querySelectorAll('.new-created-div');

    for(const elem of divList) {
        elem.remove();
    }
}


function checkToDoItem(selectedItem) {
    const task = selectedItem.nextSibling.innerText;
    if(selectedItem.checked) {
        for(const itemElement of payload.todo) {
            if(task === itemElement.item) {
                itemElement.checked = true;
            }
        }
    } else {
        for(const itemElement of payload.todo) {
            if(task === itemElement.item) {
                itemElement.checked = false;
            }
        }
    }    
}


function removeToDoItem(selectedItem) {
    const task = selectedItem.previousSibling.innerText;
    for(const itemElement of payload.todo) {
        if(task === itemElement.item) {
            const indexOfItem = payload.todo.indexOf(itemElement);
            selectedItem.parentElement.remove();
            payload.todo.splice(indexOfItem, 1);

            updateToDos();
        }
    }
}


function postFirstToDo() {
    fetch(`https://simple-json-server-scit.herokuapp.com/todo`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(getData);
}


function updateToDos() {
    fetch(`https://simple-json-server-scit.herokuapp.com/todo/${user}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(getData);
}


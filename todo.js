const todoForm = document.querySelector('.todoForm');
const todo = document.getElementById('todo');
const todoList = document.getElementById('todoList');

function addTodo(value){
    const li = document.createElement('li');    
    li.innerText = value;
    todoList.appendChild(li);
}

function submitTodo(e){
    e.preventDefault();
    const value = todo.value;
    addTodo(value);
    todo.value = '';
}

function init(){
    todoForm.addEventListener("submit",submitTodo,false);
}

init();
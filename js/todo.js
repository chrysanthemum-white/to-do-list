const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

let toDos = [];

const TODOS_KEY = 'todos';

function savedToDos() {
  const StringToDos = JSON.stringify(toDos);
  localStorage.setItem(TODOS_KEY, StringToDos);
}

function deleteButton(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  savedToDos();
}

function paintToDos(newToDo) {
  const li = document.createElement('li');
  li.id = newToDo.id;
  const span = document.createElement('span');
  span.innerText = newToDo.text;
  span.classList.add('text');
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteButton);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleToDoFomr(event) {
  event.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = '';
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDos(newToDoObj);
  savedToDos();
}

todoForm.addEventListener('submit', handleToDoFomr);

const getToDos = localStorage.getItem(TODOS_KEY);

if (getToDos !== null) {
  const parseToDos = JSON.parse(getToDos);
  toDos = parseToDos;
  parseToDos.forEach(paintToDos);
}

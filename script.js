
const todoInput = document.querySelector('#newtodo');
const button =document.querySelector('#add-btn');
const todoList = document.querySelector('#todo-list');

let todos = [
  {
    id: "1",
    name: "First Todo",
    priority: "high",
    deadline: "12-12-2023 10:00",
    createdAt: "04-10-2023 12:00",
    done: false
  },
  {
    id: "2",
    name: "Second Todo",
    priority: "medium",
    deadline: "12-12-2023 10:00",
    createdAt: "04-10-2023 09:00",
    done: false
  },{
    id: "3",
    name: "third Todo",
    priority: "high",
    deadline: "12-12-2023 10:00",
    createdAt: "04-10-2023 12:00",
    done: false
  },{
    id: "4",
    name: "last Todo",
    priority: "high",
    deadline: "12-12-2023 10:00",
    createdAt: "04-10-2023 12:00",
    done: false
  },
];

function renderTodo(todo) {
  return ""
}

function renderTodos () {
  const html = todos.map(renderTodo).join("")
  container.innerHTML = html
}

renderTodos()

todoForm.addEventlister("submit", (e) => {
  e.preventDefault()
  const newTodo = {
    name: e.target.todo.value,
    deadline: e.target.deadline,
    priority: e.target.priority,

  }
})



// button.addEventListener('click', ()  => {
//   if(todoInput.value.trim().length == '')
//   return;

//   const todos = document.createElement('div');
//   todos.classList.add('todo');

//   todoList.appendChild(todos);

//   const lists = document.createElement('p');
//   lists.id = 'list';
//   lists.innerText = todoInput.value;
//   todos.appendChild(lists);

//   lists.addEventListener('dblclick', () => {
//   lists.classList.add('line-through');
// 		editBtn.setAttribute("disabled", "disabled")
//   });


//   const editBtn = document.createElement('button');
//   editBtn.id = 'edit-btn';

//   const editIcon = document.createElement('icon');
//   editIcon.innerHTML= '<i class="fa-sharp fa-regular fa-pen-to-square"></i>';
//   editBtn.appendChild(editIcon);
//   todoList.appendChild(editBtn);

//   editBtn.addEventListener('click', () => {
// 		todoInput.value = lists.innerText;
// 		const parent = editBtn.parentElement;
// 		parent.parentElement.removeChild(parent);
//   });
   

//   const deleteBtn = document.createElement('button');
//   deleteBtn.id = 'delete-btn';

//   const deleteIcon = document.createElement('icon');
//   deleteBtn.innerHTML= '<i class="fa-solid fa-trash-can"></i>';
//   deleteBtn.appendChild(deleteIcon);
//   todoList.appendChild(deleteBtn);

//   todoInput.value = "";
// });

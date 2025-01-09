const tasks = [];

function renderElements(tasks){
  const visualizar = document.querySelector(".tasks__list")
  visualizar.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = createTaskItem(task);
    visualizar.appendChild(taskItem);    
  });

}

function createTaskItem(task, index){
  const li = document.createElement('li');
  const div = document.createElement('div');
  const span = document.createElement('span');
  const p = document.createElement('p');
  const button = document.createElement('button');
  const img = document.createElement('img');

  li.classList.add("task__item");
  div.classList.add("task-info__container");
  span.classList.add("task-type");
  button.classList.add("task__button--remove-task");

  const taskType = task.type.toLowerCase();

  if(taskType === 'urgente'){
    span.classList.add('span-urgent')
  } else if (taskType === "importante"){
    span.classList.add('span-important')
  }else if(taskType === "normal"){
    span.classList.add('span-normal')
  }

  p.textContent = task.title;
  
  img.src = 'assets/trash-icon.svg';
  img.alt = 'Remover tarefa';
  img.width = 20;
  img.height = 20;

  button.appendChild(img);

  button.addEventListener('click', () => {
    removeTask(index); 
  });

  div.appendChild(span);
  div.appendChild(p);
  li.appendChild(div);
  li.appendChild(button);

  return li
}

function addTask(event){

  event.preventDefault();
  
  const titleInput = document.getElementById('input_title')
  const typeInput = document.querySelector('.form__input--priority')

  const title = titleInput.value.trim();
  const type = typeInput.value;

  if(title === '' || type === ''){
    alert("Por favor, preencha todos os campos.")
    return;
  }

  const newTask = { title, type};
  tasks.push(newTask);

  renderElements(tasks);

  titleInput.value = '';
  typeInput.value = '';
}

function removeTask(index){
  tasks.splice(index, 1)
  renderElements(tasks)
}

const addTaskForm = document.querySelector('.form__container');
addTaskForm.addEventListener('submit', addTask);

renderElements(tasks);
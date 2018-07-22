
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners() {
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);
}

function addTask(e) {
  if (taskInput.value === '') {
    alert('Please add task in order to proceed');
  }
  //Create new li element
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));
  //Create new link element (in this case - delete button)
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);
  //Adding li to taskList
  taskList.appendChild(li);
  taskInput.value = null;

  e.preventDefault();
}


//Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Delete this task?')) {
      //getting to li
      e.target.parentElement.parentElement.remove();
    }
  }
}

//Clear Tasks
function clearTasks() {
  // taskList.innerHTML = null;

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

//Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(
    function(task) {
      const item = task.firstChild.textContent;
      //Comparing entered string in input field to textContent of each task
      if(item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    });
}
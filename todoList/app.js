const inputTask = document.getElementById('task-description')
const addTaskBtn = document.getElementById('add-task-btn')
const todoWrapper = document.querySelector('.todos-wrapper')

let tasks
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'))

let todoItemsElem = []

function Task(description) {
   this.description = description
   this.completed = false
}

const createTemplate = (task, index) => {
   return `
      <div class="todo-item ${task.completed ? 'checked' : ''}">
         <div class="description">${task.description}</div>
         <div class="buttons">
            <input onclick="completeTask(${index})" type="checkbox" class="btn-completed" ${task.completed ? 'checked' : ''}>
            <button onclick="deleteTask(${index})" class="btn-delete">Delete</button>
         </div>
      </div>
   `
}

const filterTasks = () => {
   const activeTask = tasks.length && tasks.filter(item => item.completed == false)
   const completedTask = tasks.length && tasks.filter(item => item.completed == true)
   tasks = [...activeTask, ...completedTask]
}

const fillHtmlList = () => {
   todoWrapper.innerHTML = ''
   if(tasks.length > 0 ) {
      filterTasks()
      tasks.forEach((item, index) => {
         todoWrapper.innerHTML += createTemplate(item, index)
      })
      todoItemsElem = document.querySelectorAll('.todo-item')
   }
}

fillHtmlList()

const updateLocal = () => {
   localStorage.setItem('tasks', JSON.stringify(tasks))
}

const completeTask = index => {
   tasks[index].completed = !tasks[index].completed
   if(tasks[index].completed) {
      todoItemsElem[index].classList.add('checked')
   } else {
      todoItemsElem[index].classList.remove('checked')
   }
   updateLocal()
   fillHtmlList()
}

const deleteTask = index => {
   todoItemsElem[index].classList.add('delition')
   setTimeout(() => {
      tasks.splice(index, 1)
      updateLocal()
      fillHtmlList()
   }, 500)
}

addTaskBtn.addEventListener('click', () => {
   tasks.push(new Task(inputTask.value))
   updateLocal()
   fillHtmlList()
   inputTask.value = ''
})
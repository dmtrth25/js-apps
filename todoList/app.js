const inputTask = document.getElementById('task-description')
const addTaskBtn = document.getElementById('add-task-btn')
const todoWrapper = document.querySelector('.todos-wrapper')

let tasks
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'))

function Task(description) {
   this.description = description
   this.completed = false
}

const createTemplate = (task, index) => {
   return `
      <div class="todo-item ${task.completed ? 'checked' : ''}">
         <div class="description">${task.description}</div>
         <div class="buttons">
            <input type="checkbox" class="btn-completed" ${task.completed ? 'checked' : ''}>
            <button class="btn-delete">Delete</button>
         </div>
      </div>
   `
}

const fillHtmlList = () => {
   todoWrapper.innerHTML = ''
   if(tasks.length > 0 ) {
      tasks.forEach((item, index) => {
         todoWrapper.innerHTML += createTemplate(item, index)
      })
   }
}

fillHtmlList()

const updateLocal = () => {
   localStorage.setItem('tasks', JSON.stringify(tasks))
}

addTaskBtn.addEventListener('click', () => {
   tasks.push(new Task(inputTask.value))
   updateLocal()
   fillHtmlList()
   inputTask.value = ''
})
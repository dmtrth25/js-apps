const sidebar = document.querySelector('.sidebar')
const sidebarToggle = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')

sidebarToggle.addEventListener('click', () => {
   // first solution
   if(sidebar.classList.contains('show-sidebar')) {
      sidebar.classList.remove('show-sidebar')
   } else {
      sidebar.classList.add('show-sidebar')
   }

   // second solution
   // sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', () => {
   sidebar.classList.remove('show-sidebar')
})
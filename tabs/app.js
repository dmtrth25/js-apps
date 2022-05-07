const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', function(e){
   const id = e.target.dataset.id
   if(id) {
      btns.forEach((btn) => {
      // remove active
      btn.classList.remove('active')
      e.target.classList.add('active')
      })
   }
   articles.forEach((article) => {
      // remove article
      article.classList.remove('active')
   })
   const elem = document.getElementById(id)
   elem.classList.add('active')
})
const btn = document.querySelector('.switch-btn')
const container = document.querySelector('.video-container')

btn.addEventListener('click', () => {
   if(!btn.classList.contains('slide')) {
      btn.classList.add('slide')
      container.pause()
   } else {
      btn.classList.remove('slide')
      container.play()
   }
})

// preloader
const preloader = document.querySelector('.preloader')

window.addEventListener('load', () => {
   preloader.classList.add('hide-preloader')
})
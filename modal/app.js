const modalBtn = document.querySelector('.modal-btn')
const closeBtn = document.querySelector('.close-btn')
const modal = document.querySelector('.modal-overlay')

modalBtn.addEventListener('click', () => {
   modal.classList.add('open-modal')
})

closeBtn.onclick = () => {
   modal.classList.remove('open-modal')
}
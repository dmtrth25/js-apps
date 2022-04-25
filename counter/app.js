const value = document.getElementById('value')
const btn = document.querySelectorAll('.btn')

let count = 0

btn.forEach( (item) => {
   item.addEventListener('click', (e) => {
      const styles = e.currentTarget.classList
      if(styles.contains('decrease')) {
         count--
      } else if(styles.contains('increase')) {
         count++
      } else {
         count = 0
      }
      if(count > 0) {
         value.style.color = 'green'
      } 
      if(count < 0) {
         value.style.color = 'red'
      }
      if(count === 0) {
         value.style.color = 'grey'
      }
      value.innerHTML = count
   })
})
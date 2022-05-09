const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let futureData = new Date(2022, 7, 2, 11, 40)

const year = futureData.getFullYear()
const hours = futureData.getHours()
const minutes = futureData.getMinutes()

let month = futureData.getMonth()
month = months[month]

const date = futureData.getDate()

const day = weekdays[futureData.getDay()]

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year} ${hours}:${minutes}am`

// future time in ms
const futureTime = futureData.getTime()

function getRemainingTime() {
  const today = new Date().getTime()
  const t = futureTime - today

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000

  // calculate values
  let days = t / oneDay
  days = Math.floor(days)

  let hours = Math.floor((t % oneDay) / oneHour)
  let minutes = Math.floor((t % oneHour) / oneMinute)
  let seconds = Math.floor((t % oneMinute) / 1000)
  // console.log(minutes)
}
getRemainingTime()
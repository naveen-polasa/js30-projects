let countDown;
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll('[data-time]')

function timer(seconds) {
    clearInterval(countDown)
  const now = Date.now();
  const then = now + seconds * 1000;
    displayTimeLeft(seconds)
    displayEndTime(then)
  countDown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countDown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds/60)
    const remainderSecs = seconds % 60
    const display = `${minutes}:${remainderSecs < 10 ? '0' : '' }${remainderSecs}`
    timerDisplay.textContent = display
    document.title = display
console.log(minutes, remainderSecs)
}

function displayEndTime(then) {
    const end = new Date(then)
    const hours = end.getHours()
    const minutes = end.getMinutes()
    endTime.textContent = `Be back at ${hours > 12 ? hours - 12 : hours}:${minutes < 10 ? '0':''}${minutes}`
    console.log(end)
}

buttons.forEach(btn => {
    btn.addEventListener('click', startTimer)
})

function startTimer() {
    const seconds = parseInt(this.dataset.time)
    timer(seconds)
}

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const mins = this.minutes.value
    timer(mins * 60)
    this.reset()
})
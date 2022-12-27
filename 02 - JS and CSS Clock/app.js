const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

setInterval(() => {
  const date = new Date();

  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  secHand.style.transform = `rotate(${(seconds / 60) * 360}deg)`;
  minHand.style.transform = `rotate(${
    (minutes / 60) * 360 + (seconds / 60) * 6
  }deg)`;
  hourHand.style.transform = `rotate(${
    (hours / 12) * 360 + (minutes / 60) * 30
  }deg)`;
}, 1000);

function audioPlay(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return; // if key is invalid audio won't be there
  key.classList.add("playing");
  audio.currentTime = 0; // to reset time to zero before starting again
  audio.play();
}

function removePlaying(e) {
  if (e.propertyName !== "transform") return;
  e.currentTarget.classList.remove("playing");
  // setTimeout(() => {
  //   key.classList.remove('playing')
  // }, 100);
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removePlaying));
document.addEventListener("keydown", audioPlay);

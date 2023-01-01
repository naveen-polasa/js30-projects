const checkboxes = document.querySelectorAll("input[type=checkbox]");

function handleClick(e) {
  let isBetween = false;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked === true) {
        isBetween = !isBetween;
      }
      if (isBetween) {
        checkbox.checked = true;
      }
    });
  }
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleClick);
});

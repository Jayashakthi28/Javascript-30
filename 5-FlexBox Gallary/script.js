const panel = document.querySelectorAll(".panel");
console.log(panel);
function addOpen() {
  this.classList.toggle("open");
}
function openToggle(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle("open-active");
  }
}
panel.forEach((p) => p.addEventListener("click", addOpen));
panel.forEach((p) => p.addEventListener("transitionend", openToggle));

var inputs = document.querySelectorAll("input");
function handle() {
  const suffix=this.dataset.size || '';
  document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}
inputs.forEach((inputer) => inputer.addEventListener("change", handle));
inputs.forEach((inputer) => inputer.addEventListener("mousemove", handle));

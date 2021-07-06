var inputs = document.querySelectorAll("input");
console.log(inputs);
function handle() {
  const suffix=this.dataset.size || '';
  console.log(this.name);
  console.log(this.value);
  document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}
inputs.forEach((inputer) => inputer.addEventListener("change", handle));
inputs.forEach((inputer) => inputer.addEventListener("mousemove", handle));

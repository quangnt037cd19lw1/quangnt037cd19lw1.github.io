const inputs = document.querySelectorAll('.controls input');
// console.log(inputs);

function handleUpdate(event) {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  // console.log(suffix);
  // console.log(this.name);
  // console.log(this.value);
  // console.log(event);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
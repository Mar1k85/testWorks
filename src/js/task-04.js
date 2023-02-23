const refs = {
  DecrBtn: document.querySelector('[data-action="decrement"]'),
  IncrBrn: document.querySelector('[data-action="increment"]'),
  textOutput: document.querySelector('#value'),
};

let counterValue = 0;

refs.DecrBtn.addEventListener('click', decrCounter);
refs.IncrBrn.addEventListener('click', incrCounter);
function incrCounter() {
  counterValue += 1;
  refs.textOutput.textContent = counterValue;
}
function decrCounter() {
  counterValue -= 1;
  refs.textOutput.textContent = counterValue;
}

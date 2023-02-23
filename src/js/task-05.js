const refs = {
  inputEl: document.querySelector('#name-input'),
  outputEl: document.querySelector('#name-output'),
};
refs.inputEl.addEventListener('input', setOutput);
function setOutput() {
  refs.outputEl.textContent = refs.inputEl.value.trim();
  if (refs.inputEl.value.trim() === '') {
    refs.outputEl.textContent = 'Anonymous';
  }
}

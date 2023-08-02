function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsDiv = document.querySelector('#controls');
const input = controlsDiv.querySelector('input');
const createButton = controlsDiv.querySelector('[data-create]');
const destroyButton = controlsDiv.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  const amount = +input.value;
  createBoxes(amount);
});
destroyButton.addEventListener('click', destroyBoxes);

  function createBoxes(amount) {
    let boxSize = 30;
    let boxesMarkup = '';

    for (let i = 0; i < amount; i++) {
      const color = getRandomHexColor();
      const box = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${color}; margin: 5px;"></div>`;
      boxesMarkup += box;
      boxSize += 10;
    }

    boxesDiv.innerHTML = boxesMarkup;
  }

  function destroyBoxes() {
    boxesDiv.innerHTML = '';
  }







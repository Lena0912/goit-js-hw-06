let counterValue = 0;

const refs = {
    valueElement: document.getElementById('value'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
}


function onDecrement() {
    counterValue -= 1;
    refs.valueElement.textContent = counterValue;

}
function onIncrement() {
    counterValue += 1;
    refs.valueElement.textContent = counterValue;

}

refs.decrementBtn.addEventListener('click', onDecrement);
refs.incrementBtn.addEventListener('click', onIncrement);
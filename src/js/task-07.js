const elements = {
    fontSizeController: document.querySelector("#font-size-control"),
    text: document.querySelector("#text"),
}

elements.fontSizeController.addEventListener('input', handlerChange)

function handlerChange(event) {
    elements.text.style.fontSize = `${event.currentTarget.value}px`
} 
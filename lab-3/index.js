let container = document.getElementById("container")
let main = document.getElementById("main")
let content = document.getElementById("content")
let imageRight = document.getElementById("image-right")
let toggleButton = document.getElementById("toggle-button") 
let isFlexbox = false

document.addEventListener("DOMContentLoaded", () => {
    toggleButton.textContent = "Змінити верстку на Flexbox"
    isFlexbox = false
    setBlockLayout()
})

function toggleLayout() {
    if (isFlexbox) {
        removeFlexLayout()
        setBlockLayout()
        isFlexbox = false
        toggleButton.textContent = "Змінити верстку на Flexbox"
    } else {
        removeBlockLayout()
        setFlexLayout()
        isFlexbox = true
        toggleButton.textContent = "Змінити верстку на блочну"
    }
}

function setBlockLayout() {
    container.classList.add("block")
    main.classList.add("block")
    content.classList.add("float-left")
    imageRight.classList.add("float-right")
}

function setFlexLayout() {
    container.classList.add("flex")
    container.classList.add("flex-column")
    main.classList.add("flex")
}

function removeBlockLayout() {
    container.classList.remove("block")
    main.classList.remove("block")
    content.classList.remove("float-left")
    imageRight.classList.remove("float-right")
}

function removeFlexLayout() {
    container.classList.remove("flex")
    container.classList.remove("flex-column")
    main.classList.remove("flex")
}
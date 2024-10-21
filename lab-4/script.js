let hobbyList = document.getElementById("hobby-list")
let hobbyListToggle = false

let listEl = document.querySelector("li.list-el")
let listElToggle = false
let taskTwoImg = document.getElementById("task-2-img")
let zoomInBtn = document.getElementById("zoom-in-btn")
let zoomOutBtn = document.getElementById("zoom-out-btn")
let showImgBtn = document.getElementById("show-img-btn")
let hideImgBtn = document.getElementById("hide-img-btn")
let basicImgWidth = 400
let imgZoomRatio = 1 // множник для basicImgWidth

function hobbyListChangeColor() {
    hobbyListToggle = changeColor(hobbyList, hobbyListToggle, 'lightblue', 'grey');
}

function listElChangeColor() {
    listElToggle = changeColor(listEl, listElToggle, 'green', 'white');
}

function changeColor(el, toggle, backColor, textColor) {
    el.style.backgroundColor = toggle ? "unset" : backColor
    el.style.color = toggle ? "unset" : textColor
    return !toggle
}

document.addEventListener("DOMContentLoaded", () => {
    toggleElementVisibility(hideImgBtn, false)
    toggleElementVisibility(taskTwoImg, false)
    toggleElementVisibility(zoomInBtn, false)
    toggleElementVisibility(zoomOutBtn, false)
})

function toggleElementVisibility(element, isVisible) {
    element.style.display = isVisible ? 'inline-block' : 'none'
}

showImgBtn.addEventListener("click", () => {
    toggleElementVisibility(showImgBtn, false)
    toggleElementVisibility(hideImgBtn, true)
    toggleElementVisibility(taskTwoImg, true)
    toggleElementVisibility(zoomInBtn, true)
    toggleElementVisibility(zoomOutBtn, true)
    imgZoomRatio = 1
    resizeImage()
})

hideImgBtn.addEventListener("click", () => {
    toggleElementVisibility(showImgBtn, true)
    toggleElementVisibility(hideImgBtn, false)
    toggleElementVisibility(taskTwoImg, false)
    toggleElementVisibility(zoomInBtn, false)
    toggleElementVisibility(zoomOutBtn, false)
})

zoomInBtn.addEventListener("click", () => {
    imgZoomRatio += 0.2
    resizeImage()
})

zoomOutBtn.addEventListener("click", () => {
    imgZoomRatio -= 0.2
    resizeImage()
})

function resizeImage() {
    taskTwoImg.style.width = `${basicImgWidth * imgZoomRatio}px`
    zoomOutBtn.disabled = imgZoomRatio <= 0.8;
    zoomInBtn.disabled = imgZoomRatio >= 1.2;
}
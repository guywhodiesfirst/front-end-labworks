const characters = ["A","B","C","D","E","F", 
    "0","1","2","3","4","5","6","7", "8","9"];

const numberTable = document.getElementById("number-table")
const colorPicker = document.getElementById("color-picker")
const variant = 5
let counter = 1

for(let i=0; i < 6; i++) {
    let row = document.createElement("tr")
    for(let j=0; j < 6; j++) {
        let cell = document.createElement("td")
        cell.textContent = counter
        row.appendChild(cell)
        counter++
    }
    numberTable.appendChild(row)
}

function getRandomHexCode(len=6) {
    let hexCode = "#"
    for(let i = 0; i < len; i++) {
        hexCode += getRandomCharacter()
    }

    return hexCode
}

function getRandomCharacter() {
    let index = Math.floor(Math.random() * characters.length)
    return characters[index]
}


const cells = document.querySelectorAll('td')
cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        if(parseInt(cell.textContent) === variant) {
            cell.style.backgroundColor = getRandomHexCode()
        }
    })

    cell.addEventListener('click', () => {
        if(parseInt(cell.textContent) === variant) {
            cell.style.backgroundColor = colorPicker.value
        }
    })

    cell.addEventListener('dblclick', () => {
        if(parseInt(cell.textContent) === variant) {
            cell.style.backgroundColor = ''
            cells.forEach(cell => {
                if(parseInt(cell.textContent) !== variant) {
                    cell.style.backgroundColor = colorPicker.value
                }
            })
        }
    })

    cell.addEventListener('mouseout', () => {
        if(parseInt(cell.textContent) === variant) {
            cells.forEach(cell => {
                cell.style.backgroundColor = ''                
            })
        }
    })
})
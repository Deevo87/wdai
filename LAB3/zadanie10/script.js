const dot = document.querySelector('.dot')
const body = document.querySelector('body')
const area = document.querySelector('.square')
const errorInfo = document.querySelector('.errorInfo')
let xPos
let yPos

const whereClicked = (e) => {
    if (e.target !== area) {
        errorInfo.textContent = 'Nacisnąłeś poza boisko!'
    } else {
        xPos = (e.clientX - dot.offsetLeft - dot.offsetWidth/2)
        yPos = (e.clientY - dot.offsetTop - dot.offsetHeight/2)
        dot.style.transform = "translate("+ xPos + "px," + yPos + "px)"
        errorInfo.textContent = ''
    }
}

body.addEventListener('click', whereClicked)

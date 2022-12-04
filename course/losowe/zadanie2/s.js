const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const divSquare = document.querySelector('.square')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')


const hello = () => {
    console.log('cześć')
}

const changeRed = () => {
    divSquare.style.backgroundColor = 'tomato'
}

const changeBlue = () => {
    divSquare.style.backgroundColor = 'royalblue'
}

const changeP = () => {
    p1.classList.toggle('show')
    p2.classList.toggle('show')
}

btn1.addEventListener('click', hello)


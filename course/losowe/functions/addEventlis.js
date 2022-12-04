const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')

const test = () => { 
    console.log('double click');
}

btn3.addEventListener('dblclick', test)

const btns = document.querySelectorAll('button')
console.log(btns)

const essa = () => {
    console.log('essa')
}

btns.forEach(btn => btn.addEventListener('click', essa))
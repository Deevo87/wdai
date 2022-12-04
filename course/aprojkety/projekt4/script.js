const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

let fahrenheit
let celsius

const swap = () => {
    if (one.textContent === '°C'){
        one.textContent = '°F'
        two.textContent = '°C'
        result.textContent = ''
    } else {
        two.textContent = '°F'
        one.textContent = '°C'
        result.textContent = ''
    }
}


const changeTmp = () => {
    if (converter.value !== ''){
        if (one.textContent === '°C'){
            const C = converter.value
            const res = C * 1.8 + 32
            result.textContent = `${C}°C to ${res.toFixed(1)}°F`
            converter.value = ''
        } else {
            const F = converter.value
            const res = (F - 32) / 1.8
            result.textContent = `${F}°F to ${res.toFixed(1)}°C`
            converter.value = ''
        }
    }else {
        result.textContent = 'podaj wartość!'
    }
}

const reset = () => {
    converter.value = ''
    result.textContent = ''
}

changeBtn.addEventListener('click', swap)
convBtn.addEventListener('click', changeTmp)
resetBtn.addEventListener('click', reset)
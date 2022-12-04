let cnt = 0
let clickedLime = false
let clickedTomato = false
let clickedGold = false
let propagation = false
let alreadyClicked = false
let changed = false

const licznik = document.querySelector('.licznik')
const limeCom = document.querySelector('.lime_com')
const lime = document.querySelector('.lime')
const tomatoCom = document.querySelector('.tomato_com')
const tomato = document.querySelector('.tomato')
const goldCom = document.querySelector('.gold_com')
const gold = document.querySelector('.gold')

const resetBtn = document.querySelector('.reset')
const stopPropagationBtn = document.querySelector('.stop')
const changebtn = document.querySelector('.change')


const limeInfo = () => {
    cnt += 1
    licznik.textContent = `${cnt}`
    check()
}

const tomatoInfo = () => {
    if (!tomato.classList.contains('switch-off')) {
        cnt += 2
        licznik.textContent = `${cnt}`
    } else {
        clickedTomato = false
    }
}

const goldInfo = () => {
    if (!gold.classList.contains('switch-off')){
        cnt += 5
        licznik.textContent = `${cnt}`
    } else {
        clickedGold = false
    }
}

const clicked = () => {
    if (!changed) {
        if (clickedLime) {
            limeCom.textContent = 'nacisnąłeś zielony o wartości 1'
            clickedLime = false
        }
        if (clickedTomato) {
            tomatoCom.textContent = 'nacisnąłeś czerwony o wartości 2'
            clickedTomato = false
        }
        if (clickedGold) {
            goldCom.textContent = "nacisnąłeś żółty o wartości 5"
            clickedGold = false
        }
    } else {
        if (clickedLime) {
            goldCom.textContent = 'nacisnąłeś zielony o wartości 1'
            clickedLime = false
        }
        if (clickedTomato) {
            tomatoCom.textContent = 'nacisnąłeś czerwony o wartości 2'
            clickedTomato = false
        }
        if (clickedGold) {
            limeCom.textContent = "nacisnąłeś żółty o wartości 5"
            clickedGold = false
        }
    }
}

const check = () => {
    if (cnt >= 30) {
        tomato.classList.add('switch-off')
    }
    if (cnt >= 50) {
        gold.classList.add('switch-off')
    }
}

const reset = () => {
    cnt = 0
    licznik.textContent = '0'
    resetBtns()
    if (gold.classList.contains('switch-off')) {
        gold.classList.remove('switch-off')
    }
    if (tomato.classList.contains('switch-off')) {
        tomato.classList.remove('switch-off')
    }
}

const resetClicks = () => {
    clickedGold = false
    clickedLime = false
    clickedTomato = false
}

const resetBtns = () => {
    limeCom.textContent = ''
    tomatoCom.textContent = ''
    goldCom.textContent = ''
}

const clickOrder = (c) => {
    if (!alreadyClicked) {
        if (c === 'lime') {
            clickedLime = true
            resetBtns()
            limeInfo()
            clicked()
            resetClicks()
        } else if (c === 'tomato') {
            clickedTomato = true
            tomatoInfo()
            if (propagation) {
                resetBtns()
                clicked()
                resetClicks()
                check()
            }
        } else if (c === 'gold'){
            clickedGold = true
            goldInfo()
            if (propagation) {
                resetBtns()
                clicked()
                resetClicks()
                check()
            }
        }
    }
    if (propagation) {
        alreadyClicked = true
    }
}

const switchPropagation = () => {
    if (propagation) {
        propagation = false
        stopPropagationBtn.textContent = 'stop propagation'
    } else {
        propagation = true
        stopPropagationBtn.textContent = 'start propagation'
    }
}

const change = () => {
    if (changed){
        changed = false 
    } else {
        changed = true
    }
}


lime.addEventListener('click', function(){
    clickOrder('lime')
    alreadyClicked = false
})
tomato.addEventListener('click', function() {
    clickOrder('tomato')
})
gold.addEventListener('click', function() {
    clickOrder('gold')
})
resetBtn.addEventListener('click', reset)
stopPropagationBtn.addEventListener('click', switchPropagation)
changebtn.addEventListener('click', change)
const letters = /[a-z]/
const capitalLetters = /[A-Z]/
const numbers = /[0-9]/
const specialChar = /[!@#$%^&*()]/
const minValue = 8

let passwordError
let quantity
let special
let capital
let digit
let pass
let passRepeat
let visBtn
let vis
let closestDiv
let closestPass
let closestEye

const main = () => {
    preppareDOMElements()
    prepareDOMEvents()
}

const preppareDOMElements = () => {
    passwordError = document.querySelector('.password_error')
    quantity = document.querySelector('.quantity')
    special = document.querySelector('.special')
    capital = document.querySelector('.capital')
    digit = document.querySelector('.digit')    
    pass = document.querySelector('.password_input')
    passRepeat = document.querySelector('.password_repeat')
    visBtn = document.querySelectorAll('.pass')
}

const prepareDOMEvents = () => {
    pass.addEventListener('keyup', checkPassword)
    passRepeat.addEventListener('keyup', enterKeyCheck)
    visBtn.forEach(btn => { btn.addEventListener('click', visToggle)});
}


const checkPassword = () => {
    if (pass.value.length >= minValue) {
        quantity.textContent = 'check_circle'
        quantity.classList.remove('cross')
        quantity.classList.add('check')
    }
    else {
        quantity.textContent = 'cancel'
        quantity.classList.remove('check')
        quantity.classList.add('cross')
    }

    if (pass.value.match(capitalLetters)) {
        capital.textContent = 'check_circle'
        capital.classList.remove('cross')
        capital.classList.add('check')
    } else {
        capital.textContent = 'cancel'
        capital.classList.remove('check')
        capital.classList.add('cross')
    }

    if (pass.value.match(numbers)) {
        digit.textContent = 'check_circle'
        digit.classList.remove('cross')
        digit.classList.add('check')
    } else {
        digit.textContent = 'cancel'
        digit.classList.remove('check')
        digit.classList.add('cross')
    }

    if (pass.value.match(specialChar)) {
        special.textContent = 'check_circle'
        special.classList.remove('cross')
        special.classList.add('check')
    } else {
        special.textContent = 'cancel'
        special.classList.remove('check')
        special.classList.add('cross')
    }
}

const visToggle = (e) => {
    closestDiv = e.target.closest('div')
    closestPass = e.target.closest('div').children[0]
    closestEye = e.target.closest('div').children[1]
    if (closestPass.type === 'password') {
        closestPass.type = 'text'
        closestEye.children[0].textContent = 'visibility_off'
    }
    else {
        closestPass.type = 'password'
        closestEye.children[0].textContent = 'visibility'
    }
}

const checkEqualsPass = () => {
    if (pass.value === passRepeat.value) {
        passwordError.classList.remove('password_error_wrong')
        passwordError.classList.add('password_error_good')
        passwordError.textContent = 'Hasła są takie same!'
    } else {
        passwordError.classList.add('password_error_wrong')
        passwordError.classList.remove('password_error_good')
        passwordError.textContent = 'Hasła nie są takie same!'
    }

}

const enterKeyCheck = (e) => {
    if (e.key === 'Enter') {
        checkEqualsPass()
    } else {
        passwordError.textContent = ''
    }
}




document.addEventListener('DOMContentLoaded', main)
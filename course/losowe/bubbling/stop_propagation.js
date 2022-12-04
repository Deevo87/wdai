const blue = document.querySelector('.blue')
const gold = document.querySelector('.gold')
const lime = document.querySelector('.lime')

const infoLime = () => {
    console.log('%clime', 'color: lime')
}

const infoBlue = (e) => {
    e.stopPropagation()
    console.log('%cblue', 'color: blue')
}

const infoGold = (e) => {
    e.stopPropagation()
    console.log('%cgold', 'color: gold')
}

blue.addEventListener('click', infoBlue)
gold.addEventListener('click', infoGold)
lime.addEventListener('click', infoLime)


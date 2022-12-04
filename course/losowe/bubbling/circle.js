const lime = document.querySelector('.lime')
const blue = document.querySelector('.blue')
const gold = document.querySelector('.gold')

const infoLime = () => {
    console.log('%clime', 'color: lime')
}

const infoBlue = (e) => {
    console.log('%cblue', 'color: blue')
}

const infoGold = (e) => {
    console.log('%cgold', 'color: gold')
}

lime.addEventListener('click', infoLime)
blue.addEventListener('click', infoBlue)
gold.addEventListener('click', infoGold)

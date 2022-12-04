const lime = document.querySelector('.lime')
const blue = document.querySelector('.blue')
const gold = document.querySelector('.gold')


const newCircle = document.createElement('div')
newCircle.classList.add('circle', 'purple')
gold.append(newCircle)

// const allCircles = document.querySelectorAll('.circle')
// allCircles.forEach(circle => circle.addEventListener('click', () => console.log(circle)))
// console.log(allCircles.length)

lime.addEventListener('click', e => {
    if (e.target.matches('.circle2')) {
        console.log(e.target)
    }
})
let imgInpCard1
let nameInpCard1
let roleInpCard1
let informationCard1

let imgInpCard2
let nameInpCard2
let roleInpCard2
let informationCard2

let rightBtn
let leftBtn
let randomBtn
let ind = 0

let card1
let card2
let flag = true

async function dataGetter() {
    let res = await fetch("workers.json")
    json = await res.json()
    return json
}

const preppareDOMElements = () => {
    imgInpCard1 = document.querySelector('#image1')
    nameInpCard1 = document.querySelector('.name1')
    roleInpCard1 = document.querySelector('.job1')
    informationCard1 = document.querySelector('.info1')

    imgInpCard2 = document.querySelector('#image2')
    nameInpCard2 = document.querySelector('.name2')
    roleInpCard2 = document.querySelector('.job2')
    informationCard2 = document.querySelector('.info2')

    card1 = document.querySelector('.card1')
    card2 = document.querySelector('.card2')

    leftBtn = document.querySelectorAll('.left')
    rightBtn = document.querySelectorAll('.right')
    randomBtn = document.querySelectorAll('.random')
}

const preppareDOMEvents = () => {

}

async function main(){
    let data = await dataGetter()
    preppareDOMElements()
    preppareDOMEvents()
    data = data.workers

    leftBtn.forEach(btn => { btn.addEventListener('click', function() {
        ind -= 1
            if (ind < 0) {
                ind = data.length - 1
            }
        if (flag) {
            dataSetterFor2(ind, data)
            card2.className = ''
            card2.classList.add('description', 'card2', 'visFromRight')
            
            card1.className = ''
            card1.classList.add('description', 'card1', 'opToLeft')
            flag = false
        } else {
            dataSetterFor1(ind, data)
            card1.className = ''
            card1.classList.add('description', 'card1', 'visFromRight')
            
            card2.className = ''
            card2.classList.add('description', 'card2', 'opToLeft')
            flag = true
        }
    })})

    rightBtn.forEach(btn => { btn.addEventListener('click', function() {
        ind += 1
            if (ind > data.length - 1) {
                ind = 0
            }
        console.log(ind)
        if (flag) {
            dataSetterFor2(ind, data)
            card2.className = ''
            card2.classList.add('description', 'card2', 'visFromLeft')
            
            card1.className = ''
            card1.classList.add('description', 'card1', 'opToRight')
            flag = false
        } else {
            dataSetterFor1(ind, data)
            card1.className = ''
            card1.classList.add('description', 'card1', 'visFromLeft')
            
            card2.className = ''
            card2.classList.add('description', 'card2', 'opToRight')
            flag = true
        }
    })});

    randomBtn.forEach(btn => { btn.addEventListener('click', function() {
        let rand = Math.floor(Math.random() * data.length)
        console.log(rand)
        while (rand === ind) {
            rand = Math.floor(Math.random() * data.length)
        }
        ind = rand
        if (flag) {
            dataSetterFor2(ind, data)
            card2.className = ''
            card2.classList.add('description', 'card2', 'randomFadeIn')
           
            card1.className = ''
            card1.classList.add('description', 'card1', 'randomFadeOut')
            flag = false
        } else {
            dataSetterFor1(ind, data)
            card1.className = ''
            card1.classList.add('description', 'card1', 'randomFadeIn')
            
            card2.className = ''
            card2.classList.add('description', 'card2', 'randomFadeOut')
            flag = true
        }
    })});
}

const dataSetterFor1 = (ind, data) => {
    console.log(data)
    let name = data[ind].name
    let role = data[ind].role
    let image = data[ind].image
    let info = data[ind].description

    imgInpCard1.srcset = 'images/' + image
    nameInpCard1.textContent = name
    roleInpCard1.textContent = role
    informationCard1.textContent = info
}

const dataSetterFor2 = (ind, data) => {
    console.log(data)
    let name = data[ind].name
    let role = data[ind].role
    let image = data[ind].image
    let info = data[ind].description

    imgInpCard2.srcset = 'images/' + image
    nameInpCard2.textContent = name
    roleInpCard2.textContent = role
    informationCard2.textContent = info
}


document.addEventListener('DOMContentLoaded', main())
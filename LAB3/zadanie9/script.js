let json
let desc
let imgInp
let nameInp
let roleInp
let information
let rightBtn
let leftBtn
let randomBtn
let ind = 0

async function dataGetter() {
    let res = await fetch("workers.json")
    json = await res.json()
    return json
}

const preppareDOMElements = () => {
    desc = document.querySelector('.description')
    imgInp = document.querySelector('#image')
    nameInp = document.querySelector('#name')
    roleInp = document.querySelector('#job')
    information = document.querySelector('#info')

    leftBtn = document.querySelector('.left')
    rightBtn = document.querySelector('.right')
    randomBtn = document.querySelector('.random')
}

const preppareDOMEvents = () => {

}

async function main(){
    let data = await dataGetter()
    preppareDOMElements()
    preppareDOMEvents()
    console.log(data)
    data = data.workers
    dataSetter(0, data)
    leftBtn.addEventListener('click', function() {
        ind -= 1
        if (ind < 0) {
            ind = data.length - 1
        }
        dataSetter(ind, data)
    })
    rightBtn.addEventListener('click', function() {
        ind += 1
        if (ind > data.length - 1) {
            ind = 0
        }
        dataSetter(ind, data)
        
    })
    randomBtn.addEventListener('click', function() {
        ind = Math.floor(Math.random() * data.length)
        dataSetter(ind, data)
    })
}

const dataSetter = (ind, data) => {
    console.log(data)
    let name = data[ind].name
    let role = data[ind].role
    let image = data[ind].image
    let info = data[ind].description

    imgInp.srcset = 'images/' + image
    nameInp.textContent = name
    roleInp.textContent = role
    information.textContent = info
}





document.addEventListener('DOMContentLoaded', main())
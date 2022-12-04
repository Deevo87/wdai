const NUMOFEMPLOYES = 3
let curId = 0
const PHOTOSSRC = ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg"]
const DESC = ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur dolorem laborum labore, officiis ratione iure placeat, reiciendis beatae minima quos fuga incidunt tempore autem distinctio nulla cupiditate ullam. Nobis, nesciunt!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur dolorem laborum labore, officiis ratione iure placeat, reiciendis beatae minima quos fuga incidunt tempore autem distinctio nulla cupiditate ullam. Nobis, nesciunt!", 
"Consequatur dolorem laborum labore, officiis ratione iure placeat, reiciendis beatae minima quos fuga incidunt tempore autem distinctio nulla cupiditate ullam. Nobis, nesciunt!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur dolorem laborum labore, officiis ratione iure placeat, reiciendis beatae minima quos fuga incidunt tempore autem distinctio nulla cupiditate ullam. Nobis, nesciunt", 
"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur dolorem laborum labore, officiis ratione iure placeat, reiciendis beatae minima quos fuga incidunt tempore autem distinctio nulla cupiditate ullam."]
const NAME = ["Maria skłodowska", "Marek Bednarz", "Anna Sucha"]
const POS = ["Project manager", "Full-Stack developer", "Data analyst"]

let left = document.getElementById("left")
let right = document.getElementById("right")
let img = document.querySelector("img")
let namee = document.querySelector("h4")
let position = document.querySelector("#position")
let desc = document.querySelector("#desc")
let sliders = document.querySelector(".slide")
let random = document.querySelector("#randomizer")

const slideRight = [
    { transform: 'translateX(400px)' },
    { transform: 'translateX(0px)' }
];
const slideLeft = [
    { transform: 'translateX(-400px)' },
    { transform: 'translateX(0px)' }
];

const timing = {
    duration: 750,
    iterations: 1,
}

function next(){
    if (curId === 2){
        curId = 0
    }
    else{
        curId++
    }
    img.src = PHOTOSSRC[curId]
    img.animate(slideLeft, timing)
    namee.innerHTML = NAME[curId]
    namee.animate(slideLeft, timing)
    position.innerHTML = POS[curId]
    position.animate(slideLeft, timing)
    desc.innerHTML = DESC[curId]
    desc.animate(slideLeft, timing)
}

function prev(){
    if (curId === 0){
        curId = 2
    }
    else{
        curId--
    }
    img.src = PHOTOSSRC[curId]
    img.animate(slideRight, timing)
    namee.innerHTML = NAME[curId]
    namee.animate(slideRight, timing)
    position.innerHTML = POS[curId]
    position.animate(slideRight, timing)
    desc.innerHTML = DESC[curId]
    desc.animate(slideRight, timing)
}

function randomizer(){
    let id = Math.floor(Math.random() * 3)
    img.src = PHOTOSSRC[id]
    img.animate(slideRight, timing)
    namee.innerHTML = NAME[id]
    namee.animate(slideRight, timing)
    position.innerHTML = POS[id]
    position.animate(slideRight, timing)
    desc.innerHTML = DESC[id]
    desc.animate(slideRight, timing)
}

right.addEventListener('click', next)
left.addEventListener('click', prev)
random.addEventListener('click', randomizer)
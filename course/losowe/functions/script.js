
const btns = document.querySelectorAll('button');
console.log(btns);

function btnMsg(e) {
    console.log(`kliknięto ${e.target.textContent}`)
}

btns.forEach(btn => btn.addEventListener('click', btnMsg));

 
function MyData(name, age) {
    console.log(`jestem ${name} i mam ${age} lat`)
}

MyData('Rafał', 20)

const hello = (name = 'w chuuj') => {
    console.log(`essa ${name}, jebać js `)
}

hello()


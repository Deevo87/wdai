const list = document.createElement('ul')
document.body.append(list)
for (let i = 0; i < 10; i++){
    const liItem = document.createElement('li')
    liItem.textContent = i+1
    list.append(liItem)
}
console.log(list)
const lastli = list.querySelector('li:last-child')
lastli.textContent = 'jestem ostatnim elementem'

lastli.style.backgroundColor = 'royalblue'
lastli.style.padding = '20px 40px 20px 40px'
lastli.style.fontSize = '40px'
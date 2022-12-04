// const name = "rafał";
// const wiek = 20;
// let dish = "chips";

// const firstName = 'Tomek'
// let age = 12
// age = 18
 
// const favColor = 'niebieski'
// const favMeal = 'schabowy'
 
// let currentCar
// currentCar = 'Audi'
 
// let firstName2 = 'Ania'
// let age2 = 24
// let favColor2 = 'czerwony';

// const text1 = 'powiększ mnie!'
// const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
// const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
// const text4 = 'sprawdź, czy zawieram słowo "czy"'
// const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
// const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
// const text7 = 'podziel, ten, string, od, przecinków'

// console.log(text1.toUpperCase());
// console.log(text2.toLowerCase());
// console.log(text3.slice(6));
// console.log(text4.includes('czy'))
// console.log(text5.charAt(2));
// console.log(text6.replaceAll('pies', 'kot'))
// console.log(text7.split(','))

// const num = '24sdasdas';
// console.log(parseInt(num));

// const pass ='21343sfdgdsf';
// if (pass.length > 10 && pass.includes('!')){
//     console.log('essa')
// } else {
//     console.log('nahh man')
// }

// const x = 100;
// const newX = x > 20 ? `${x} > 20` : `$(x) < 20`
// console.log(newX)

// const a = 50;
// const b = 30;

// if (a > b) {
//     console.log(`${a} jest większe od ${b}`)
// }

// const color = 'blue';
// const newColor = 'green';
// if (color === newColor) {
//     console.log('git');
// }else {
//     console.log('nie git');
// }

// const percent = '70%';
// switch (percent) {
//     case '10%':
//         console.log('its 10%');
//         break;
//     case '20%':
//         console.log('its 20%');
//         break;
//     case '30%':
//         console.log('its 30%');
//         break;
//     default:
//         console.log(`its ${percent}`);
// }

// const value = 20;
// // const newValue = (value >= 100) ? `value >= 100` : `essa`;
// // console.log(newValue);
// let text;
// if (value >= 100) {
//     text = `${value} >= 100`;
// }else if (100 >= value && value > 30) {
//     text = `100 >= ${value} > 30`;
// }else{
//     text = 'chujnia';
// }

// console.log(text.toUpperCase());


// const tab = [5, 8, 10, 23, 38, 60];
// for (number of tab){
//     console.log(number/5);
// }

// for (const number of tab){
//     if (number % 2 == 0) {
//         console.log('%c parzyste', 'background-color: gold; color: black');
//     }else {
//         console.log('%c nieparzyste', 'background-color: red; color: black');
//     }
// }

const btns = document.querySelectorAll('button');
console.log(btns);

function btnMsg(e) {
    console.log(`kliknięto ${e.target.textContent}`)
}

btns.forEach(btn => btn.addEventListener('click', btnMsg));
// const numbers = [1, 2, 3, 4, 5, 6]
// console.log(numbers)
// numbers.unshift(100, 200, 'asdas')
// console.log(numbers)
// numbers.shift()
// console.log(numbers)

// numbers.push(7, 8, 9)
// console.log(numbers)
// numbers.pop()
// console.log(numbers)

// function multiply(x) {
//     return x * 2;
// }

// const newNumbers = numbers.map(multiply)
// console.log(numbers)
// console.log(newNumbers)


// const strs = ['a', 'b', 'c']
// const newTab = numbers.concat(strs)
// console.log(newTab)
// console.log(numbers)

// const menu = [...numbers, ...strs]
// console.log(menu)

// const menu2 = strs.concat(numbers)
// console.log(menu2)

// const numbers = [0, 0, 1, 1, 2, 2, 2]
// const colors = ['red', 'green', 'blue', true, 123]
// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

// const numbers2 = numbers.slice(2)
// console.log(numbers2)

// const numbers3 = numbers.slice(4, numbers.length)
// console.log(numbers3)

// const randomStuff = colors.splice(colors.length - 2, 2)
// console.log(colors)
// console.log(randomStuff)

// const newCars = cars.splice(2, 4, 'test')
// console.log(cars)
// console.log(newCars)

// function even(x) {
//     return x % 2 == 0
// }

// console.log(numbers.filter(even))
// numbers.forEach(number => console.log(number*5))

// const tab = ['c', 'd']
// tab.unshift('a', 'b')
// tab.push('e', 'f')
// console.log(tab)
// console.log(tab.includes('c'))

// const newTab = tab.concat(numbers)
// const newTab = [...tab, ...numbers]
// console.log(newTab)

// const numbers = [1, 5, 13, 26, 48]

// const newNumbers = numbers.map(number => number * 5)
// console.log(numbers)
// console.log(newNumbers)

// for (number of newNumbers){
//     if (number % 2 == 0){
//         console.log(`${number} jest parzysty`)
//     }else {
//         console.log(`${number} jest nieparzysty`)
//     }
// }

const str = 'Audi, Mercedes, BMW, Nissan, Doge'
const tabStr = str.split(', ')
console.log(tabStr)
tabStr.length > 3 ? console.log(`jest ok`) : console.log(`nie jest ok`)
if (tabStr.includes('Audi')){
    tabStr.push('Ferrari')
}

console.log(tabStr)
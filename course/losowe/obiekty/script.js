//1.przykład z this

// const user = {
//     name:'Rafał',
//     showName() {
//         console.log(this)
//         console.log(this.name)
//     }
// }

// user.showName() 

//2. konstruktor
// function User(name, age) {
//     this.name = name
//     this.age = age
//     this.hello = function() {
//         console.log(`witam ${this.name}`)
//     }
// }

// const user = {
//     name: 'rafał',
//     age: 20
// }

// const newUser = new User('rafał', 19)
// const newUser2 = new User('yo', 200)
// const newUser3 = new User('szef', 100)
// newUser2.hello()

//3. thicz1
const person = {
    name: 'lisa',
    'fav-meal': 'schabowy',
    address: {
        city: 'Kraków',
        'zip-code': '00-000',
        showCity: function() {
            console.log(this)
            console.log(this.city)
        }
    }
}

person.address.showCity()

function Food(name) {
    this.name = name
}

const meal = new Food('schabowy')
const meal2 = new Food('pepsi')

console.log(meal, meal2)
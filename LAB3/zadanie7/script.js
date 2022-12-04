let json
let excA

async function dataGetter() {
    let res = await fetch('http://localhost:3000/cities')
    json = await res.json()
    return json
}

const exA = (data) => {
    json = data
    let cities = ""
    let onlyMP = json.filter(function (city) {
        return city.province === "małopolskie"
    })
    
    for (let city in onlyMP){
        cities += onlyMP[city].name + ', '
    }
    excA = document.querySelector('.excA')
    excA.textContent = cities
}

const exB = (data) => {
    json = data
    let cities = ""
    let doubleA = json.filter(function (city){
        let cnt = 0
        for (let i = 0; i < city.name.length; i++) {
            if (city.name.charAt(i) == 'a' || city.name.charAt(i) == 'A') {
                cnt += 1
            }
            if (cnt === 2) {
                return true
            }
        }
        return false
    })
    for (let city in doubleA) {
        cities += doubleA[city].name + ", "
    } 
    const excB = document.querySelector('.excB') 
    excB.textContent = cities
}

const exC = (data) => {
    json = data
    let population = json.sort(function(city_A, city_B) {
        return (city_A.people / city_A.area) - (city_B.people / city_B.area)
    })
    const excC = document.querySelector('.excC')
    excC.textContent = population[population.length-5].name
}


const exD = (data) => {
    json = data
    let cities = ""
    let citiesOverMil = json.filter(function (city) {
        return city.people > 100000
    })
    for (city in citiesOverMil) {
        cities += citiesOverMil[city].name + " city, "
    }
    const excD = document.querySelector('.excD')
    excD.textContent = cities
} 

const exE = (data) => {
    json = data
    const above = document.querySelector('.above80k')
    const bellow = document.querySelector('.bellow80k')
    const excE = document.querySelector('.excE')
    let citiesAbove80k = json.filter(function (city) {
        return city.people > 80000
    })
    let citiesBellow80k = json.filter(function (city) {
        return city.people <= 80000
    })
    let more
    if (citiesAbove80k.length > citiesBellow80k.length) {
        more = "powyżej 80000 mieszkańców"
    } else {
        more = "poniżej 80000 mieszkańców"
    }
    bellow.textContent = `Miast z nie mniej niż 80000 jest ${citiesBellow80k.length}`
    above.textContent = `Miast z powyżej 80000 jest ${citiesAbove80k.length}`
    excE.textContent = `Więcej miast jest ${more}`
}

const exF = (data) => {
    json = data
    let area = 0
    const excF = document.querySelector('.excF')
    let citiesP = json.filter(function (city) {
        return city.township.charAt(0) === 'P'
    })
    console.log(citiesP)
    for (city in citiesP) {
        area += citiesP[city].area
    }
    excF.textContent = `Średnia powierzchnia miast z powiatów zaczynających się na literę P to ${area/citiesP.length}`
}

const exG = (data) => {
    json = data
    let cities = ""
    let less = ""
    let cnt = 0
    let flag = true
    const excG = document.querySelector('.excG')
    const everyCity = document.querySelector('.every')
    let citiesFromPom = json.filter(function (city) {
        return city.province === "pomorskie"
    })
    for (city in citiesFromPom) {
        if (citiesFromPom[city].people > 5000) {
            cities += citiesFromPom[city].name + ", "
            cnt++
        } else {
            flag = false
        }
    }
    if (flag) {
        everyCity.textContent = `Tak, wszystkie miasta mają więcej niż 5000 mieszkańców i jest ich ${cnt}`
    } else {
        everyCity.textContent = `Nie, nie wszystkie miasta mają więcej niż 5000 mieszkańców. A tych które mają więcej niż 5000 jest ${cnt}`
    }
    console.log(cnt)
    excG.textContent = `Miasta z województwa pomorskiego z populacją większą od 5000: ${cities}`
}

async function main() {
    json = await dataGetter()
    exA(json)
    exB(json)
    exC(json)
    exD(json)
    exE(json)
    exF(json)
    exG(json)
}

document.addEventListener('DOMContentLoaded', main)

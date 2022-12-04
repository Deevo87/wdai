const person = {
    name: 'lily',
    age: 23,
    job: 'DJ',
    car:{
        brand: 'Dodge',
        model: 'Viper'
    }
}

const showInfo = ({job, name, age}) => {
    // const {job, name, age} = person
    console.log(`${name} pracuje jako ${job} i ma ${age} lata.`)
}

showInfo(person)

const showInfo2 = ({car: {brand, model}}) => {
    console.log(`Jej samochód to ${brand} ${model}.`)
}

showInfo2(person)

const showInfo3 = () => {
    const {car: {brand, model}} = person
    console.log(`Jej samochód to ${brand} ${model}`)
}

showInfo3()
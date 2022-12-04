let nameInp
let telInp
let addBtn
let deleteBtn
let contactList

let newContact
let newName
let newNumber
let dataDiv
let binDiv
let btn
let phone

const main = () => {
    preppareDOMElements()
    prepareDOMEvents()
}

const preppareDOMElements = () => {
    nameInp = document.querySelector('.name_input')
    telInp = document.querySelector('.tel_input')
    addBtn = document.querySelector('.add_btn')
    contactList = document.querySelector('.tel_list')
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addContact)
    contactList.addEventListener('click', checkList)
}

const isValidName = () => {
    if (nameInp.value.includes('-')) {
        return /[A-Z]{1}[a-złćźężąóu]+[ ]{1}[A-Z]{1}[a-złćźężąóu]+[-]?[A-Z]{1}[a-złćźężąóu]+/.test(nameInp.value)
    } else {
        return /[A-Z]{1}[a-złćźężąóu]+[ ]{1}[A-Z]{1}[a-złćźężąóu]+/.test(nameInp.value)
    }
}

const isValidNumber = () => {
    const tel = telInp.value
    if (tel === '') {
        return false
    }
    const phone = tel.replace(/\s/g, '') 
    if (phone.length == 9){
        return /[0-9]+[ ]?/.test(tel)
    }  else if (phone.length == 13) {
        return /[+]{1}[ ]?[0-9]+[ ]?/.test(tel)
    } else {
        return false
    }
}

const addContact = () => {
    if (nameInp.value !== '' && isValidNumber() && isValidName()) { //&& isValidName() && isValidNumber()
        createTools()
    }
}

const createTools = () => {
    newContact = document.createElement('li')

    dataDiv = document.createElement('div')
    dataDiv.classList.add('list_data')

    binDiv = document.createElement('div')
    binDiv.classList.add('bin')

    newName = document.createElement('p')
    newName.classList.add('list_name')
    newName.textContent = nameInp.value

    newNumber = document.createElement('p')
    newNumber.classList.add('list_num')
    newNumber.textContent = telInp.value.replace(/\s/g, '')

    btn = document.createElement('button')
    btn.innerHTML = '<i class="essa material-symbols-outlined">delete</i>'
    btn.classList.add('delete_btn')

    dataDiv.append(newName, newNumber)
    binDiv.append(btn)

    newContact.append(dataDiv, binDiv)
    newContact.classList.add('list_elem')
    contactList.append(newContact)
}

const checkList = (e) => {
    if (e.target.matches('.delete_btn') || e.target.matches('.essa')){
        deleteContact(e)
    }
}

const deleteContact = (e) => {
    e.target.closest('li').remove()
}

document.addEventListener('DOMContentLoaded', main)
const recordTemplate = document.querySelector("#recordTemplate");
const phoneNumbers = document.querySelector("#phoneNumbers")
const addButton = document.querySelector(".add-button");
const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phoneNumber");

const isPhoneNumberValid = (phoneNumber) => {
    if (!phoneNumber) {
        return false;
    }

    const withoutWhitesapces = phoneNumber.replace(/\s/g, '');
    console.log(withoutWhitesapces)
    if (withoutWhitesapces.length === 9 || withoutWhitesapces.length === 12) {
        return /^[0-9.,]+$/.test(phoneNumber);
    }
    else if (withoutWhitesapces.length == 13) {
        return phoneNumber[0] === "+" && /^[0-9.,]+$/.test(phoneNumber.slice(1));
    }
    else {
        return false;
    }
}

const capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}

const capitalizeName = (name) => {
    return name.split(" ").map((item) => {
        if (!item.includes("-")) {
            return capitalize(item);
        } else {
            return item.split("-").map(capitalize).join("-");
        }
    }).join(" ")
}

const isNameValid = (name) => {
    return name && /^[A-Za-z\s|-]*$/.test(name) && name == capitalizeName(name);
}


addButton.addEventListener("click", () => {
    phoneInput.classList.remove("wrong-input");
    nameInput.classList.remove("wrong-input");

    const name = nameInput.value;
    const phoneNumber = phoneInput.value;
    const record = recordTemplate.content.cloneNode(true);

    const phoneNumberValid = isPhoneNumberValid(phoneNumber);
    const nameValid = isNameValid(name);

    if (!(phoneNumberValid && nameValid)) {
        if (!phoneNumberValid) {
            phoneInput.classList.add("wrong-input");
            console.log("Given phone number is invalid!")
        }
        if (!nameValid) {
            nameInput.classList.add("wrong-input");
            console.log("Given name is invalid");
        }

        return
    }

    record.querySelector(".record-name").textContent = name;
    record.querySelector(".record-phone-number").textContent = phoneNumber;
    record.querySelector(".delete-button").addEventListener("click", (e) => {
        e.currentTarget.closest(".record").remove();
    });
    phoneNumbers.append(record);

    phoneInput.value = "";
    nameInput.value = "";
});
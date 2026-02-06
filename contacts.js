const nameField = document.getElementById("nameSubmit");
const phoneField = document.getElementById("phoneSubmit");
const addressField = document.getElementById("addressSubmit");
const emailField = document.getElementById("emailSubmit");

const phoneBtn = document.getElementById("phoneBtn");
const addressBtn = document.getElementById("addressBtn");
const emailBtn = document.getElementById("email");
const nameBtn = document.getElementById("nameBtn");

const contactList = document.getElementById("contactList");
const phoneList = document.getElementById("phoneList");
const addressList = document.getElementById("addressList");
const emailList = document.getElementById("emailList");

let nameWarn = document.getElementById("nameWarn");
let phoneWarn = document.getElementById("phoneWarn");
let addressWarn = document.getElementById("addressWarn");
let emailWarn = document.getElementById("emailWarn");

const nameVal = nameField.value;
const phoneVal = phoneField.value;
const addressVal = addressField.value;
const emailVal = emailField.value;

//TODO: combine all clear functions into one single function
function clearNameField() {
    nameField.value = "";
};

function clearPhoneField() {
    phoneField.value = "";
};

function clearAddressField() {
    addressField.value = "";
};

function clearEmailField() {
    emailField.value = "";
};

function clearFields(){
    nameField.value = "";
    phoneField.value = "";
    addressField.value = "";
    emailField.value = "";
};

function handleDataSubmit() {
    handleNameClick();
    handlePhoneClick();
    handleAddressClick();
    handleEmailClick();
};

//-------------------------------------------------------------------------------------------------





//TODO: put nameVal into localStorage
function handleNameClick() {
    const nameVal = nameField.value;
    console.log(nameVal);

    if (nameVal.length < 3) {
        nameWarn.textContent = "You must enter at least 3 characters!";
    } else {
        nameWarn.textContent = "";
        const nameEntry = document.createElement("li")
        contactList.appendChild(nameEntry);
        nameEntry.textContent = nameVal;
        // localStorage.setItem(name1, nameVal);
        clearNameField();
    }
}

//TODO: put phoneVal into localStorage
function handlePhoneClick() {
    //TODO: fix phone regex, validate phone num, non int chars can currently be submitted
    const phoneVal = phoneField.value;
    // const phoneRegex = /[0-9]/
    if (phoneVal.length < 10 || parseInt(phoneVal) === NaN) {
        phoneWarn.textContent =
            "You must enter a phone number at least 10 digits long!";
    } else {
        phoneWarn.textContent = "";
        const phoneEntry = document.createElement("li");
        const separator = document.createElement("hr")
        phoneList.appendChild(phoneEntry);
        phoneEntry.appendChild(separator);
        phoneEntry.textContent = phoneVal;
        clearPhoneField();
    }
}

//TODO: put addressVal into localStorage
//TODO: input validation 
function handleAddressClick() {
    const addressVal = addressField.value;
    if (addressVal.length < 5) {
        addressWarn.textContent = "You must enter at least 5 characters!";
        throw new Error('hey dumbass you fucked up');
    } else {
        const addressEntry = document.createElement("li");
        addressList.appendChild(addressEntry);
        addressEntry.textContent = addressVal;
        clearAddressField();
    }
   
}

//TODO: put emailVal into localStorage
function handleEmailClick() {
    //TODO: finish email validation
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
    // console.log(regex.match('gordon@email.com'));
    const emailVal = emailField.value;

    if (
        regex.test(emailVal === false) ||
        emailVal.length < 5 ||
        emailVal.includes("@") == false
    ) {
        emailWarn.textContent =
            "You must enter a valid email address that is at least 5 characters long!";
    } else {
        emailWarn.textContent = "";
        const emailEntry = document.createElement("li");
        emailList.appendChild(emailEntry);
        emailEntry.textContent = emailVal;
        clearEmailField();
    }
}

//TODO: combine all data into one set of forms that is submitted all together

console.log("names:", nameVal);
console.log("phones:", phoneVal);
console.log("addresses:", addressVal);
console.log("emails:", emailVal);

// push name data into array
// combine data at same position in array
// loop appendChild ul combined name[i]
// add contact info to page as button clicked

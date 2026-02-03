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

let nameWarn = document.getElementById('nameWarn');
let phoneWarn = document.getElementById('phoneWarn');
let addressWarn = document.getElementById('addressWarn');
let emailWarn = document.getElementById('emailWarn');

let contactNames = [];
let contactPhones = [];
let contactAddresses = [];
let contactEmails = [];

function clearNameField(){
    nameField.value = "";
};

function clearPhoneField(){
    phoneField.value = "";
};

function clearAddressField(){
    addressField.value = "";
};

function clearEmailField(){
    emailField.value = "";
};

function handleNameClick() {
    const nameVal = nameField.value;
    if (nameVal.length < 3) {
        nameWarn.textContent = "You must enter at least 3 characters!"
    } else {
        nameWarn.textContent = ""
        contactNames.push(nameVal);
        displayNames();
        clearNameField();
    }
};

function handlePhoneClick() {
//TODO: fix phone regex, validate phone num, non int chars can currently be submitted
    const phoneVal = phoneField.value;
    // const phoneRegex = /[0-9]/   
     if (phoneVal.length < 10 || parseInt(phoneVal) === NaN) {
        phoneWarn.textContent = "You must enter a phone number at least 10 digits long!"
    } else {
        phoneWarn.textContent = "";
        contactPhones.push(phoneVal);
        displayPhones();
        clearPhoneField();
    }
};

function handleAddressClick() {
    const addressVal = addressField.value;
    contactAddresses.push(addressVal);
    displayAddresses();
    clearAddressField();
};

function handleEmailClick() {
    //TODO: finish email validation
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/
    // console.log(regex.match('gordon@email.com'));
    const emailVal = emailField.value;
    
    if (regex.test(emailVal === false) || emailVal.length < 5 || emailVal.includes('@') == false) {
        emailWarn.textContent = "You must enter a valid email address that is at least 5 characters long!"
    } else {
        emailWarn.textContent = ""
        contactEmails.push(emailVal);
        displayEmails();
    clearEmailField();
    }
};

function displayNames() {
    contactList.innerHTML = `<li>${contactNames}</li>`;
    console.log(contactNames);
    //push data submitted to array, display data from array in ol/ul 
    //TODO: create new li element every time button is clicked 
};

function displayPhones() {
    phoneList.innerHTML = `<li>${contactPhones}</li>`;
};

function displayAddresses() {
    addressList.innerHTML = `<li>${contactAddresses}</li>`;
};

function displayEmails() {
    emailList.innerHTML = `<li>${contactEmails}</li>`;
};

console.log("names:", contactNames);
console.log("phones:", contactPhones);
console.log("addresses:", contactAddresses);
console.log("emails:", contactEmails);

// push name data into array
// combine data at same position in array
// loop appendChild ul combined name[i]
// add contact info to page as button clicked
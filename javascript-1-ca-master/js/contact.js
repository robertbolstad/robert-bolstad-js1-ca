// ---------------------------- Level 1 --------------------------------------------
/*
const form = document.getElementById("contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    validateFirstName();
    validateLastName();
    validateEmail();
    validateTextarea();
};

function validateFirstName(){
    const firstName = document.getElementById("firstName")
    const firstNameError = document.getElementById("firstNameError")
    const firstNameValue = firstName.value;

    if (checkInputLength(firstNameValue) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    } 
}

function validateLastName(){
    const lastName = document.getElementById("lastName")
    const lastNameError = document.getElementById("lastNameError")
    const lastNameValue = lastName.value;

    if (checkInputLength(lastNameValue) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    } 
}

function validateEmail(){
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const invalidEmailError = document.getElementById("invalidEmailError");

    const emailValue = email.value;

    if (checkInputLength(emailValue) === true) {
    emailError.style.display = "none";
    } else {
    emailError.style.display = "block";
    }

    if (validateEmailAdress(emailValue) === true) {
        invalidEmailError.style.display = "none";
    } else {
        invalidEmailError.style.display = "block";
    }

}


function validateTextarea(){
    const message = document.getElementById("message")
    const messageError = document.getElementById("messageError")
    const messageValue = message.value;

    if (TextareaInputLength(messageValue) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    } 
}


function validateEmailAdress(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function checkInputLength(value) {
    // trim the value
    const trimmedValue = value.trim();

    // if the value's length is greater than 0 return true
    if (trimmedValue.length > 0) {
        return true;
    } else {
        return false;
    }
}

function TextareaInputLength(value) {
    // trim the value
    const trimmedValue = value.trim();

    // if the value's length is equal or greater than 10 return true
    if (trimmedValue.length >= 10) {
        return true;
    } else {
        return false;
    }
}
*/

// ---------------------------- Level 2 --------------------------------------------
//declaring a variable and selecting the form from contact.html
const form = document.getElementById("contactForm");

//adding a new div to form which is going to display a message to the user if they passes all the validation
form.innerHTML = `<div class="formPassed"> Form passed validation </div>` + form.innerHTML;
const formPassed = document.querySelector(".formPassed");

//hiding the message by setting the div to "none"
formPassed.style.display = "none";

const formgroup = document.querySelectorAll(".form-group");
const emailErrorMessage = formgroup[2].querySelectorAll(".form-error");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    //prevent reloading of the page
    event.preventDefault();

    //calling the rest of the validation functions
    validateFirstName();
    validateLastName();
    validateEmail();
    validateTextarea();
    validationPassed();    
};

function validateFirstName(){
    const firstName = document.getElementById("firstName");
    const firstNameError = formgroup[0].querySelector(".form-error");
    const firstNameValue = firstName.value;

    if (checkInputLength(firstNameValue) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    } 
}

function validateLastName(){
    const lastName = document.getElementById("lastName");
    const lastNameError = formgroup[1].querySelector(".form-error");
    const lastNameValue = lastName.value;

    if (checkInputLength(lastNameValue) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    } 
}

function validateEmail(){
    const email = document.getElementById("email");
    const emailError = emailErrorMessage[0];
    const invalidEmailError = emailErrorMessage[1];

    const emailValue = email.value;

    if (checkInputLength(emailValue) === true) {
    emailError.style.display = "none";
    } else {
    emailError.style.display = "block";
    }

    if (validateEmailAdress(emailValue) === true) {
        invalidEmailError.style.display = "none";
    } else {
        invalidEmailError.style.display = "block";
    }

}


function validateTextarea(){
    const message = document.getElementById("message")
    const messageError = formgroup[3].querySelector(".form-error")
    const messageValue = message.value;

    if (TextareaInputLength(messageValue) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    } 
}


function validateEmailAdress(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function checkInputLength(value) {
    // trim the value
    const trimmedValue = value.trim();

    // if the value's length is greater than 0 return true
    if (trimmedValue.length > 0) {
        return true;
    } else {
        return false;
    }
}

function TextareaInputLength(value) {
    // trim the value
    const trimmedValue = value.trim();

    // if the value's length is equal or greater than 10 return true
    if (trimmedValue.length >= 10) {
        return true;
    } else {
        return false;
    }
}



function validationPassed(){
    const conditionArray =[
        //storing all conditions which must be met in an array
        firstNameError.style.display === "none",
        lastNameError.style.display ==="none",
        emailError.style.display === "none",
        invalidEmailError.style.display === "none",
        messageError.style.display === "none"

    ];
    //Checks if conditionArray has any occurrences of false within its array. This method returns -1 if the value to search for never occurs.
    if (conditionArray.indexOf(false) === -1) {
        formPassed.style.display = "block";
    } else {
        formPassed.style.display = "none";
    }
}

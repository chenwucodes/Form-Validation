// Get form elements
let emailInput = document.querySelector("#email");
let loginInput = document.querySelector("#login");
let passwordInput = document.querySelector("#pass");
let password2Input = document.querySelector("#pass2");
let newsletterInput = document.querySelector("#newsletter");
let termInput = document.querySelector("#terms");

//define a global variables
let termsErrorMsg = "❌ Please accept the terms and conditions.";
let defaultMSg = "";
let emailErrorMsg = "❌ Email address should be non-empty with the format xyx@xyz.xyz.";
let loginErrorMsg = "❌ User name should be non-empty,and within 20 characters long.";
let passErrorMsg = "❌ Password should be at least 6 characters:1 uppercase,1 lowercase.";
let pass2ErrorMsg = "❌ Please retype password.";

// create paragraph to display the error Msg
// and assign this paragraph to the class warning to style the error MSg
let emailError = document.createElement('p');
emailError.setAttribute("class", "warning");
document.querySelectorAll(".form-group")[0].append(emailError);

let loginError = document.createElement("p");
loginError.setAttribute("class", "warning");
document.querySelectorAll(".form-group")[1].append(loginError);

let passError = document.createElement("p");
passError.setAttribute("class", "warning");
document.querySelectorAll(".form-group")[2].append(passError);

let pass2Error = document.createElement("p");
pass2Error.setAttribute("class", "warning");
document.querySelectorAll(".form-group")[3].append(pass2Error);

let termError = document.createElement("span");
termError.setAttribute("class", "warning");
document.querySelectorAll(".form-check")[1].append(termError);


// method to validate email
function validateEmail() {
  let email = emailInput.value;
  let regexp = /\S+@\S+\.\S+/;

  if (regexp.test(email)) {
    error = defaultMSg;
  } else {
    error = emailErrorMsg;
  }
  return error;
}

// method to validate Login
function validateLogin() {
  let login = loginInput.value;
  let loginRegExp = /^[a-zA-Z0-9]{1,19}$/;

  if (loginRegExp.test(login)) {
    error = defaultMSg;
    login = login.toLowerCase();
  } else {
    error = loginErrorMsg;
  }
  return error;
}

// method to validate password
function validatePassword() {
  let password = passwordInput.value;
  let passwordRegexp = /^(?=.{6,})(?=.*[a-z])(?=.*[A-Z]).*$/;
  if (passwordRegexp.test(password)) {
    error = defaultMSg;
  } else {
    error = passErrorMsg;
  }
  return error;
}

// method to validate retype password
function validatePassword2() {
  let password = passwordInput.value;
  let passwordRegexp = /^(?=.{6,})(?=.*[a-z])(?=.*[A-Z]).*$/;
  let password2 = password2Input.value;
  if (password2 == password && passwordRegexp.test(password2)) {
    error = defaultMSg;
  } else {
    error = pass2ErrorMsg;
  }
  return error;
}

///method to validate the terms
function validatTerms() {
  if (termInput.checked) return defaultMSg;
  else return termsErrorMsg;
}

///method to validate the newsletter
function alertNewsletter() {
    alert("Please check your spam if you do not reveive our emails.");
}

function validateNewsletter(){
  if(newsletterInput.checked)
  return alertNewsletter();
}

//event handler for submit event
function validate(e) {
  e.preventDefault();
  let valid = true; //global validation
  let emailValidation = validateEmail();
  let loginValidation = validateLogin();
  let passwordValidation = validatePassword();
  let password2Validation = validatePassword2();
  let termsValidation = validatTerms();

  if (emailValidation !== defaultMSg) {
    emailError.textContent = emailValidation;
    valid = false;
  }

  if (loginValidation !== defaultMSg) {
    loginError.textContent = loginValidation;
    valid = false;
  }

  if (passwordValidation !== defaultMSg) {
    passError.textContent = passwordValidation;
    valid = false;
  }

  if (password2Validation !== defaultMSg) {
    pass2Error.textContent = password2Validation;
    valid = false;
  }

  if (termsValidation !== defaultMSg) {
    termError.textContent = termsValidation;
    valid = false;
  }

  if (valid) {
        alert("Data is valid!!");
        clearForm();
        window.open("https://www.youtube.com/watch?v=4osO3A70sAY");
  }

  return valid;
}

 // method to clear the form
function clearForm() {
    emailInput.value = defaultMSg;
    loginInput.value = defaultMSg;
    passwordInput.value = defaultMSg;
    password2Input.value = defaultMSg;
    termInput.checked = false;
    newsletterInput.checked = false;
  }

// event listner to empty the text inside the two paragraph when reset
function resetFormError() {
  emailError.textContent = defaultMSg;
  loginError.textContent = defaultMSg;
  passError.textContent = defaultMSg;
  pass2Error.textContent = defaultMSg;
  termError.textContent = defaultMSg;
}

// add event listner to the email if you entered correct email,the error paragraph with be empty
emailInput.addEventListener("blur", () => {
  let x = validateEmail();
  if (x == defaultMSg) {
    emailError.textContent = defaultMSg;
  }
});

// add event listner to the checkbox if you check the terms box,the error paragraph will be empty
termInput.addEventListener("change", function () {
  if (this.checked) {
    termError.textContent = defaultMSg;
  }
});

// add event listner to the login if you entered correct username,the error paragraph with be empty
loginInput.addEventListener("blur", () => {
  let x = validateLogin();
  if (x == defaultMSg) {
    loginError.textContent = defaultMSg;
  }
});

// add event listner to the password if you entered correct password,the error paragraph with be empty
passwordInput.addEventListener("blur", () => {
  let x = validatePassword();
  if (x == defaultMSg) {
    passError.textContent = defaultMSg;
  }
});

// add event listner to the retype password if you entered correct retype password,the error paragraph with be empty
password2Input.addEventListener("blur", () => {
  let x = validatePassword2();
  if (x == defaultMSg) {
   pass2Error.textContent = defaultMSg;
  }
});

// add event listner to the checkbox if you check the newsletter box,the error paragraph will be empty
newsletterInput.addEventListener("change", function () {
  if (this.checked) {
    alertNewsletter();
  }
});

document.form.addEventListener("submit", validate);
document.form.addEventListener("reset", resetFormError);



// first name
document.getElementById("firstName").addEventListener("input", (e) => {
  var firstName = e.target.value;
  var firstNameValid = "First Name is Valid";
  var firstNameColor = "green";
  if (firstName.match(/[a-z]/g)) {
    firstNameValid = " First Name is not Valid";
    firstNameColor = "red";
  }
  var fnameHelp = document.getElementById("fnameHelp");
  fnameHelp.innerHTML = firstNameValid;
  fnameHelp.style.color = firstNameColor;
});
// last name
document.getElementById("lastName").addEventListener("input", (e) => {
  var lastName = e.target.value;
  var lastNameValid = "Last Name is Valid";
  var lastNameColor = "green";
  if (lastName.match(/[a-z]/g)) {
    lastNameValid = " Last Name is not Valid";
    lastNameColor = "red";
  }
  var lnameHelp = document.getElementById("lnameHelp");
  lnameHelp.innerHTML = lastNameValid;
  lnameHelp.style.color = lastNameColor;
});
// Email
document.getElementById("email").addEventListener("input", (e) => {
  var email = e.target.value;
  var emailValid = "Email is Valid";
  var emailColor = "green";
  if (email.indexOf("@") === -1 || email.indexOf(".com") === -1) {
    emailValid = " Email is not Valid";
    emailColor = "red";
  }
  var emailHelp = document.getElementById("emailHelp");
  emailHelp.innerHTML = emailValid;
  emailHelp.style.color = emailColor;
});
//phone number
document.getElementById("phoneNumber").addEventListener("input", (e) => {
  var phoneNumber = e.target.value;
  var phoneNumberValid = "Phone Number is Valid";
  var phoneNumberColor = "green";
  if (isNaN(phoneNumber)) {
    phoneNumberValid = " Phone Number is not Valid";
    phoneNumberColor = "red";
  }
  var numberHelp = document.getElementById("numberHelp");
  numberHelp.innerHTML = phoneNumberValid;
  numberHelp.style.color = phoneNumberColor;
});
// message
document.getElementById("mess").addEventListener("input", (e) => {
  var mess = e.target.value;
  var messValid = "Message is Valid";
  var messColor = "green";
  if (!mess.match(/^[A-Za-z]+$/)) {
    messValid = " Message is not Valid";
    messColor = "red";
  }
  var messHelp = document.getElementById("messHelp");
  messHelp.innerHTML = messValid;
  messHelp.style.color = messColor;
});
//submit
document.getElementById("btnSubmit").addEventListener("click", () => {
  var fName = document.getElementById("firstName");
  var lName = document.getElementById("lastName");
  var pNumber = document.getElementById("phoneNumber");
  var eMail = document.getElementById("email");
  var messGe = document.getElementById("mess");

  if (fName.value == "") {
    alert("Please provide your first name!");
    fName.focus();
    return false;
  }
  if (lName.value == "") {
    alert("Please provide your last name!");
    lName.focus();
    return false;
  }
  if (email.value == "") {
    alert("Please provide your email!");
    email.focus();
    return false;
  }
  if (pNumber.value == "") {
    alert("Please provide your phone number!");
    pNumber.focus();
    return false;
  }
  if (messGe.value == "") {
    alert("Please provide a message!");
    messGe.focus();
    return false;
  } else {
    alert("I will get back to you ASAP !!");
  }
});

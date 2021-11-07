function myownFunction() {
    var x = document.getElementById("owndivbox");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    var y = document.getElementById("myOnlySelector");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

// Display selection of range slider underneath slider
function inputtextupdate(val) {
    document.getElementById('textInput').innerHTML=val; 
}

// Validate that at least one selection is made, if not print error message
function validateSelection() {
    var upperCheck = document.getElementById("uppercasecheck").checked;
    var lowerCheck = document.getElementById("lowercasecheck").checked;
    var numericCheck = document.getElementById("numericcheck").checked;
    var specialCheck = document.getElementById("specialcheck").checked;

    if (!upperCheck && !lowerCheck && !numericCheck && !specialCheck) {
        document.getElementById('errorvalitation').innerHTML="Please select at least one option to create your password.";
    } else {
        document.getElementById('errorvalitation').innerHTML="";
    }

    return {upperCheck, lowerCheck, numericCheck, specialCheck};
}

// Create character set to randomly choose from when generating password
function getCharacterSet() {
    var checks = validateSelection();
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvqxyz";
    var numeric = "0123456789";
    var special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var charSet = "";

    if (checks.upperCheck) {
        charSet += upper;
    } 
    if (checks.lowerCheck) {
        charSet += lower;
    } 
    if (checks.numericCheck) {
        charSet += numeric;
    } 
    if (checks.specialCheck) {
        charSet += special;
    }
    
    return charSet;
}

// Write logic for password generation
function generatePassword() {
    var charSet = getCharacterSet();
    var lengthString = document.getElementById("range").value;
    var generatedPassword = "";
    var length = parseInt(lengthString);

    for (i = 0; i < length; i++) {
        generatedPassword += charSet[Math.floor(Math.random() * charSet.length)];
    }

    return generatedPassword;
}

// Write password to the #password input
function writePassword() {
    var checks = validateSelection();
    var password = generatePassword();
    // Generate variable so that we can print password text
    var passwordText = document.querySelector("#pswd");

    // Assign result of generatePassword function as value of passwordText to print on card unless none of the checkboxes are checked, then return an empty string
    if (checks.upperCheck || checks.lowerCheck || checks.numericCheck || checks.specialCheck){
        passwordText.value = password;
    } else if (!checks.upperCheck && !checks.lowerCheck && !checks.numericCheck && !checks.specialCheck){
        passwordText.value = "";
    }
}

// Generate variable in order to add event listener
var generateBtn = document.querySelector("#generation");

// Add event listener to generate button to execute writePassword function on click
generateBtn.addEventListener("click", writePassword);
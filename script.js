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

function inputtextupdate(val) {
    document.getElementById('textInput').innerHTML=val; 
}


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

function writePassword() {
    var checks = validateSelection();
    var password = generatePassword();
   
    var passwordText = document.querySelector("#pswd");

    
    if (checks.upperCheck || checks.lowerCheck || checks.numericCheck || checks.specialCheck){
        passwordText.value = password;
    } else if (!checks.upperCheck && !checks.lowerCheck && !checks.numericCheck && !checks.specialCheck){
        passwordText.value = "";
    }
}

var generateBtn = document.querySelector("#generation");

generateBtn.addEventListener("click", writePassword);
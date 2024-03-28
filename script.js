var generateBtn = document.querySelector("#generate");

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersChars = "123456789"; 
const symbolChars = "!@#$%^&*+_?=";

let includeLowercase = true;
let includeUppercase = true;
let includeNumbers = true;
let includeSymbols = true;

function generatePassword() {
  let allowedchars = "";
  let password = "";

  allowedchars += includeLowercase ? lowercaseChars : "";
  allowedchars += includeUppercase ? uppercaseChars : "";
  allowedchars += includeSymbols ? symbolChars : "";
  allowedchars += includeNumbers ? numbersChars : "";
  
  let length = parseInt(prompt("Choose a length between 8 to 15 characters"));

  if (isNaN(length) || length < 8 || length > 15) {
    alert("Password length must be between 8 and 15 characters");
    return ""; 
  }

  for (let i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allowedchars.length);
    password += allowedchars[randomIndex];
  }
  console.log(`Generated password: ${password}`);
 
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


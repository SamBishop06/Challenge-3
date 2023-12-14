// Assignment code here
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  console.log(Math.random);

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersChars = "123456789"; 
  const symbolChars = "!@#$%^&*+_?=";

  let allowedchars = "";
   let password = "";

  allowedchars += includeLowercase ? lowercaseChars : "";
  allowedchars += includeUppercase ? uppercaseChars : "";
  allowedchars += includeSymbols ? symbolChars : "";
  allowedchars += includeNumbers ? numbersChars :"";
  
  let length = prompt("choose a lenght between 8 to 15 charecters")
  if (length <= 7){
  alert("must be greater than 7")
  return
  }

  for(let i = 0; i < length; i++){
    var randomIndex =  Math.floor(Math.random() * allowedchars.length);
    password += allowedchars[randomIndex];
  }
  console.log(`Generated password: ${password}`);
 
  let Uppercase = (confirm ("Press ok to use Uppercase") == true);
  let lowrcase = (confirm("Press ok to us lowercase") == true);

  return password;
  
}





const passwordLength = 15;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

//var password = generatePassword(length, includeLowercase, includeUppercase, includeUppercase, includeSymbols);






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

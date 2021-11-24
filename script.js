// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables and data arrays for password and character types (At least one: 2)lowercase, 3)uppercase, 4)numeric, and 5)special characters)

var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var passwordCharacters;

//Variables for user input prompts 1)length of password (8-128), 2)lowercase, 3)uppercase, 4)numeric 5)special characters)

var passwordLength;
var passwordLower;
var passwordUpper;
var passwordNumeric;
var passwordSpecial;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to write password to the #password input
function writePassword() {
  var blankPassword = userChoices();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function to get user input 
function userChoices () { 
  passwordLength = prompt("Select between 8-128 characters");
  console.log("Length: " + passwordLength);

  if (passwordLength === "") {
    alert("You need to enter a valid value (8-128)");
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Length: " + passwordLength);
  }

  else if (passwordLength < 8 || passwordLength > 128) {
    alert("You need to enter a valid value (8-128)");
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Length: " + passwordLength);
  }

  else {
    passwordLower= confirm("Do you want to use lowercase?")
    console.log("Lowercase: " + passwordLower);
    passwordUpper= confirm("Do you want to use uppercase?")
    console.log("Uppercase: " + passwordUpper);
    passwordNumeric= confirm("Do you want to use numbers?")
    console.log("Numeric: " + passwordNumeric);
    passwordSpecial= confirm("Do you want to use special characters?")
    console.log("Special characters: " + passwordSpecial);
  }
};

//Function to generate password
function generatePassword() {
    userPassword = "";
    passwordCharacters = "";
    if (passwordLower == true) {
      passwordCharacters += lowercaseCharacters;
    }
    if (passwordUpper == true) {
      passwordCharacters += uppercaseCharacters;
    }
    if (passwordNumeric == true) {
      passwordCharacters += numericCharacters;
    }
    if (passwordSpecial == true) {
      passwordCharacters += specialCharacters;
    }

    for (var i = 0; i < passwordLength; i++) {
      userPassword += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
      console.log(userPassword);
    }
  
  var blankPassword = [];
  var password = blankPassword.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
}

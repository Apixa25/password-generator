// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// all the possible characters that the password could contain
var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "}", "{", "[", "]", "|", "/", "?"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// a holder number of characters that our password could have
var howManyChar = 8;
// what the real number of characters is
var choiceArray = [];


// this will be how I generate the password from the gathered information
function generatePassword(){

}

// this will be where I gather the information I need to make the password
// the if statment is to force the user to use numbers/not characters and the right PW length
function getPWInfo(){
    howManyChar = parseInt(prompt("Choose the number of characters, must be more than 8 and less than 128"));
    
    if(isNaN(howManyChar) || howManyChar < 8 || howManyChar > 128) {
        alert("Must use between 8-128 characters");
        return false;
    }

    if (confirm("Use lower case?")) {
        choiceArray = choiceArray.concat(lowerCase);
    }
    if (confirm("Use upper case?")) {
        choiceArray = choiceArray.concat(upperCase);
    }
    if (confirm("Sprinkle in some special characters?")) {
        choiceArray = choiceArray.concat(special);
    }
    if (confirm("How about numbers? Everybody loves some numbers!")) {
        choiceArray = choiceArray.concat(numbers);
    }
    return true;
}


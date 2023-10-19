// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  function generatePassword() {
    var characters = window.prompt("How many characters do you want the password?");
    var lowercase = window.confirm("Do you want to include lowercase letters?");
    var uppercase = window.confirm("Do you want to include uppercase letters?");
    var numeric = window.confirm("Do you want to include numeric values?");
    var special = window.confirm("Do you want to include special characters?");

    var alphabetLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var alphabetUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",]
    var other = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "\\"]

    var newPass = [];

    // Checks characters size requirements

    if (characters < 8) {
      window.confirm("Password should be atleast 8 characters long!")
      return
    } else if (characters > 128) {
      window.confirm("Password can't be more than 128 characters! ")
      return
    } else if ((lowercase === false) && (uppercase === false) && (numeric === false) && (special === false)) {
      window.confirm("We can't have a blank password! We need atleast 1 option selected!")
      return
    }
    
    // Adds options the user selects
    var list = [];
    
    if (lowercase === true) {
      list = list.concat(alphabetLow);
    } 
     
    if (uppercase === true) {
      list = list.concat(alphabetUp);
    }

    if (numeric === true) {
      list = list.concat(numbers);
    }

    if (special === true) {
      list = list.concat(other);
    }

    // Shuffles and pick random characters from the selected list

    for (var i = 0; i < characters; i++) {
      function shuffle(list) {
        return list.sort(() => Math.random() * list.length);
      }
      shuffle(list);
      var picker = Math.floor(Math.random() * list.length);
      var newPassword = list[picker];
      newPass.push(newPassword);
    }
    return newPass.join("");
  }
}

    

   

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

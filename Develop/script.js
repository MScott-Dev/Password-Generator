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

    // Can remove after finsihed
    console.log(characters);
    console.log(lowercase);
    console.log(uppercase);
    console.log(numeric);
    console.log(special);

    var alphabetLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var alphabetUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",]
    var other = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "\\"]

    var option1 = alphabetLow;
    var option2 = alphabetUp;
    var option3 = numbers;
    var option4 = other;

    var newPass = [];

    // var picker = Math.floor(Math.random() * characters);
    
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

      // Checks if only one was selected
    } else if ((lowercase === true) && (uppercase === false) && (numeric === false) && (special === false)) {
        for(var i=0; i < characters; i++) {
          var newOption = option1;
          function shuffle(newOption) {
            return newOption.sort(() => Math.random() -0.5);
          }
          shuffle(newOption);
          newOption = option1;
          var picker = Math.floor(Math.random() * characters);
          var newPassword = newOption[picker];
          newPass.push(newPassword);
          
        }
        return newPass.join("");
        
    } else if ((lowercase === false) && (uppercase === true) && (numeric === false) && (special === false)) {
      for(var i=0; i < characters; i++) {
        var newOption = option2;
          function shuffle(newOption) {
            return newOption.sort(() => Math.random() -0.5);
          }
          shuffle(newOption);
        var picker = Math.floor(Math.random() * characters);
        var newPassword = option2[picker];
        newPass.push(newPassword);
        
      }
      return newPass.join("");

    }  else if ((lowercase === false) && (uppercase === false) && (numeric === true) && (special === false)) {
      for(var i=0; i < characters; i++) {
        var newOption = option3;
          function shuffle(newOption) {
            return newOption.sort(() => Math.random() -0.5);
          }
          shuffle(newOption);
        var picker = Math.floor(Math.random() * characters);
        var newPassword = option3[picker];
        newPass.push(newPassword);
        
      }
      return newPass.join("");

    } else if ((lowercase === false) && (uppercase === false) && (numeric === false) && (special === true)) {
      for(var i=0; i < characters; i++) {
        var newOption = option4;
          function shuffle(newOption) {
            return newOption.sort(() => Math.random() -0.5);
          }
          shuffle(newOption);
        var picker = Math.floor(Math.random() * characters);
        var newPassword = option4[picker];
        newPass.push(newPassword);
        
      }
      return newPass.join("");

      // Checks if two are selected
    } else if ((lowercase === true) && (uppercase === true) && (numeric === false) && (special === false)) {
      var newOption = option1.concat(option2);
      for(var i=0; i < characters; i++) {
        function shuffle(newOption) {
          return newOption.sort(() => Math.random() -0.5);
        }
        shuffle(newOption);
        var picker = Math.floor(Math.random() * characters);
        var newPassword = newOption[picker];
        newPass.push(newPassword);
        
      }
      return newPass.join("");

     

    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

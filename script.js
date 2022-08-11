// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assignment Code
var generateBtn = document.querySelector("#generate");

var pwLenght;
var selectedLower;
var selectedUpper;
var selectedNum;
var selectedSpecial;
var userChoices;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating Uppercase letters
var upperArray = [];
var getUpper = function (x) {
  return x.getUpperCase();
};
upperCase = lowerCase.map(getUpper);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~", "\""];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);

// Function will generate the password
function generatePassword() {
  // Ask four user Input
  pwLenght = prompt("What length do yoou want? Choose between 8 and 128");
  console.log("Password length " + pwLenght);
  
  if(!pwLenght) {
    alert("Required value");

  } else if (pwLenght < 8 || pwLenght > 128) {
    pwLenght = prompt("Please choose between 8 and 128");
    console.log("Password length " + pwLenght);
  
  } else { 
    selectedLower = confirm("Will this include lower case letters? Click OK to confirm.");
    console.log("Lower case " + selectedLower);
    selectedUpper = confirm("Will this include upper case letters? Click OK to confirm.");
    console.log("Upper case " + selectedUpper);
    selectedNum = confirm("Will this include numbers? Click OK to confirm.");
    console.log("Number " + selectedNum);
    selectedSpecial = confirm("Will this include special characters? Click OK to confirm.");
    console.log("Special Character " + selectedSpecial);

  };

 // No input 
 if (!selectedLower && !selectedUpper && !selectedNum && !selectedSpecial) {
  userChoices = alert("Choose one of the options below");
// All options seleccted
} else if (selectedLower && selectedUpper && selectedNum && selectedSpecial) {
  userChoices = lowerCase.concat(upperCase, numbers, special);
  console.log(userChoices);
}
// 3 options selected
else if (selectedLower && selectedUpper && selectedNum) {
  userChoices = lowerCase.concat(upperCase, numbers);
  console.log(userChoices);
}
else if (selectedLower && selectedUpper && selectedSpecial) {
  userChoices = lowerCase.concat(upperCase, special);
  console.log(userChoices);
}
else if (selectedLower && selectedNum && selectedSpecial) {
  userChoices = lowerCase.concat(numbers, special);
  console.log(userChoices);
}
else if (selectedUpper && selectedNum && selectedSpecial) {
  userChoices = upperCase.concat(numbers, special);
  console.log(userChoices);
}
// 2 optins selected
else if (selectedLower && selectedUpper) {
  userChoices = lowerCase.concat(upperCase);
  console.log(userChoices);
}
else if (selectedLower && selectedNum) {
  userChoices = lowerCase.concat(numbers);
  console.log(userChoices);
}
else if (selectedLower && selectedSpecial) {
  userChoices = lowerCase.concat(special);
  console.log(userChoices);
}
else if (selectedUpper && selectedNum) {
  userChoices = upperCase.concat(numbers);
  console.log(userChoices);
}
else if (selectedUpper && selectedSpecial) {
  userChoices = upperCase.concat(special);
  console.log(userChoices);
}
else if (selectedNum && selectedSpecial) {
  userChoices = numbers.concat(special);
  console.log(userChoices);
}
// 1 toption selected
else if (selectedLower) {
  userChoices = lowerCase;
  console.log(userChoices);
}
else if (selectedUpper) {
  userChoices = upperArray.concat(upperCase);
  console.log(userChoices);
}
else if (selectedNum) {
  userChoices = numbers;
  console.log(userChoices);
}
else if (selectedSpecial) {
  userChoices = special;
  console.log(userChoices);
};

  // Empty variable for the password lenght
  var passwordBlank = [];
  
  // Loop for random selection
  for (var i = 0; i < pwLenght; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Join and return the password 
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
}


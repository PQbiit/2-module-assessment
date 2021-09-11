const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function validator(pw){
    if(pw.length < 10){
        console.log("Pasword must be at least 10 characters")
        return false;
    }
    if(pw.length > 15){
        console.log("Password must not exceed 15 characters")
        return false
    }
    return true
}

console.log("Welcome to Password Validator!");
reader.question("Enter password to validate: ",(password)=>{
    if(validator(password)){
        console.log("Password passed validation, congrats!");
    }
    reader.close();
});
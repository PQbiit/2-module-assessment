//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE
console.log("//////////////////PROBLEM 1////////////////////");
let myName = "Alfonso Arriaga";
console.log(myName);

//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE
console.log("//////////////////PROBLEM 2////////////////////");
let faveNum = 12;
console.log(faveNum);

//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE
console.log("//////////////////PROBLEM 3////////////////////");
let lovesCode = true;
console.log(`lovesCode: ${lovesCode}`);

//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

//CODE HERE
console.log("//////////////////PROBLEM 4////////////////////");
if (faveNum === 13) {
  console.log("Lucky 13!")
}else{
  console.log("Not lucky 13");
}


//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

//CODE HERE
console.log("//////////////////PROBLEM 5////////////////////");
for (let i = 0; i < 5; i++) {
  console.log(`${i+1} - ${faveNum}`);
}
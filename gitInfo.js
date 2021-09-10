/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
console.log("//////////////////PROBLEM 1////////////////////");
const gitDefinition = "Git is a version control system used to track changes in any software projects source code files. It also facilitates cooperation between programmers working together on a same project by allowing non-linear development workflows.";
console.log(gitDefinition);
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
console.log("//////////////////PROBLEM 2////////////////////");
const gitHubDefinition = "GitHub is an online platform that integrates with git and at it's core functions as an online repository for software projects source code.";
console.log(gitHubDefinition);

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
console.log("//////////////////PROBLEM 3////////////////////");
let init = {
    description: "Creates an empty git respository in the current directory.",
    code: "git init"
}
console.log(init);

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
console.log("//////////////////PROBLEM 4////////////////////");
let clone = {
    description: "Clones a remote repository into the current directory.",
    code: "git clone <repo-URL>"
}
console.log(clone);

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
console.log("//////////////////PROBLEM 5////////////////////");
let status = {
    description: "Shows the status of the directory currently being tracked",
    code: "git status"
}
console.log(status);

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
console.log("//////////////////PROBLEM 6////////////////////");
let add = {
    description: "Adds specified files to the staging area of the working tree",
    code: "git add <file>"
}
console.log(add);

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
console.log("//////////////////PROBLEM 7////////////////////");
let commit = {
    description: "Creates a snapshot of the files in the staging area of the working directory and a given message describing the changes",
    code: "git commit -m <message>"
}
console.log(commit);

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
console.log("//////////////////PROBLEM 8////////////////////");
let push = {
    description: "Publishes the commited files to the remote repository",
    code: "git push"
}
console.log(push);
/*  Function Declaration */

function showMessage(){ //parameters
    alert('Hello everyone!'); // body 
}

// function name(parameter1, parameter2, ... parameterN) {
//     // body
//  }

showMessage(); //arguments

/* Local variables */
// A variable declared inside a function is only visible inside that function.

function showMessage(){
    let message = "Hello, I'm JS!"; // local variable 

    alert(message);
}

showMessage();

alert(message); // error    

/* Outer variables  */
let userNmae = "John";

function showMessage(){
    let message = 'Hello' + userNmae;
    alert(message);
    userNmae = 'Bob';
}
alert(userNmae); //John
showMessage();
alert(userNmae); //Bob

let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable

/* Parameters */

function showMessage(from, text){ //parameters: from, text
    alert(from + ':' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)

/* Default value */

function showMessage(from, text="defult"){
    alert(from + ':' + text);
}
showMessage('Ann');

/* Returning a value */

function sum(a,b){
    return a+ b;
}

let result = sum(a,b);
alert(result);

function checkAge(age){
    if(age >= 18){
        return true;
    } else {
        return confirm('Do you have permission?');
    }
}

let age = prompt("How old are you?", 18);

if(checkAge(+age)) {
    alert("access granted");
} else {
    alert("Access denied");
}

// It is possible to use return without a value. That causes the function to exit immediately.
function showMovie(age) {
    if ( !checkAge(age) ) {
      return;
    }
  
    alert( "Showing you the movie" ); // (*)
    // ...
}


//1 
/* no */

//2
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
}

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

//3
function min(a, b){
    // return (a > b) ? b : a;
    if(a > b) {
        return b;
    } else {
        return a;   
    }
}

//4
function pow(n , x){
    return n**x;
}
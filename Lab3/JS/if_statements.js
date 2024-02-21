/* The “if” statement */

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );    

/* The “else” clause */
let year1 = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year1 == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

/* Several conditions: “else if” */
let year2 = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year2 < 2015) {
  alert( 'Too early...' );
} else if (year2 > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}

/* Conditional operator ‘?’
Sometimes, we need to assign a variable depending on a condition. */

let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
// let accessAllowed = (age > 18) ? true : false;
// the same
// let accessAllowed = age > 18;

alert(accessAllowed);

let result = condition ? value1 : value2;

/* Multiple ‘?’ */
let age3 = prompt("How age?", 18);

let message = (age < 3) ? "Hi, baby!" :
                (age < 18) ? "Hello!" :
                (age < 100) ? "Greetings!" :
                "What an unusual age!";
            
alert(message);

/* if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
} */


/* Non-traditional use of ‘?’ */

let company = prompt("Which company created JS?", "");

(company == "Netscape") ?
    alert('Right!') : alert('Wrong!')


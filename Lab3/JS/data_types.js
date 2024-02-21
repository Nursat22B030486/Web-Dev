// We can put any type in a variable. For example, a variable can at one moment be a string and then store a number:

let message = "John"
message = 123456 //Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.

// Number
let n = 123
n = 12.365;

// Besides regular numbers, there are so-called “special numeric values” which also belong to this data type:
//  Infinity, -Infinity and NaN

/* INFINITY */

alert (1/0);
// or
alert(Infinity)

/* NaN */
alert( "not a number" / 2 ); // NaN, such division is erroneous


alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN 
/* exception: NaN ** 0 = 1 */

/* A BigInt value is created by appending n to the end of an integer */

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

/* STRING */
let str = "hello";
let str2 = 'Single quote are ok too'
// let phrase = `can embed another ${str}` Backticks  are "extended functionality" quotes.
// They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:
let name = "john"
alert(`Hello, ${name}!`) // hello john!

alert("the result is ${1+2}") //  the result is ${1 + 2} (double quotes do nothing)


/* BOOLEAN */
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;
alert(isGreater);  //true

/* NULL */
// The special null value does not belong to any of the types described above

let age = null;
// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

/* UNDEFINED */
let aged;
alert(aged) //shows undefiined  

let age1 = 100;

// change the value to undefined
age1 = undefined;

alert(age1); // "undefined"

/*  TYPEOF operator  not function*/
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3) 




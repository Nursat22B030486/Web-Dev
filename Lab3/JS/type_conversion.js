/* String conversion */
let value = true;

alert(typeof value); // boolean --> false

value = String(value);
alert(typeof value) // string --> "false"

/* Numeric conversion */
// Numeric conversion in mathematical functions and expressions happens automatically

alert("6" / "2"); // 3 strings are converted to numbers

// We can use the Number(value) function to explicitly convert a value to a number:

let str = "123";
alert(typeof str) // string

let num = Number(str);
alert(typeof num) // number

let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

/* BOOLEAN conversion */
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false



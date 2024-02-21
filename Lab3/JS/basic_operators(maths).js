/* Terms: “unary”, “binary”, “operand” */

/* An operand – is what operators are applied to. For instance, in the multiplication of 
5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, 
people call these “arguments” instead of “operands”. */

// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:
let x = 1;
x = -x;
alert(x) //-1 

/* An operator is binary if it has two operands. The same minus exists in binary form as well: */

let z = 1, y = 3;
alert( y - z ); // 2, binary minus subtracts values

// String concatenation with binary "+"

let s = "my" + "string";
alert(s); // mystring
// let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values
alert(1 + "2") // 12        
alert(2 + 2 + '1' ); // "41" and not "221"
alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers

/* Numeric conversion, unary + */

/* The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers.
 But if the operand is not a number, the unary plus converts it into a number. */

// No effect on numbers
let x1 = 1;
alert( +x1 ); // 1

let y1 = -2;
alert( +y1 ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0
let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5


/* Comma */
let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)
/* Boolean is the result */

alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

let result = 5 > 4; // assign the result of the comparison
alert( result ); // true

/* String comparison */
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true


/* Comparison of different types */

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1
alert( true == 1 ); // true
alert( false == 0 ); // true
let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true

/* Strict equality   */

alert( 0 == false ); // true

alert( '' == false ); // true

// A strict equality operator === checks the equality without type conversion.
alert( 0 === false ); // false, because the types are different

/* Comparison with null and undefined */
alert( null === undefined ); // false
alert( null == undefined ); // true

// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

/* Strange result: null vs 0 */

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true


/* An incomparable undefined */

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
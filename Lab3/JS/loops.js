/* The “while” loop */

while (condition) {
    // code
    // so-called "loop body"
}
let i = 0;
while(i < 3){
    alert(i++); 
}
// let i = 3;
// while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
//   alert( i );
//   i--;
// }

/* The “do…while” loop   */

do {
    // loop body
  } while (condition);

i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

/* The “for” loop */
for (begin; condition; step) {
    // ... loop body ...
}


/* Breaking the loop */
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );

// Continue
for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
  
    alert(i); // 1, then 3, 5, 7, 9
  }

  outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // if an empty string or canceled, then break out of both loops
      if (!input) break outer; // (*)
  
      // do something with the value...
    }
  }
  
  alert('Done!');
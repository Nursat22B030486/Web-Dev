// let func = (arg1, arg2, arg3, ..., argN) =>Expression;

// let func = function(...){
//     return Expression;
// }

let sum = (a, b) => a + b;

/*  this line of code is a shorter form of 
let sum = function(a, b){
    return a + b;
} */

console.log(sum(1, 2));

let double = n => n * 2;

console.log(double(3));

let sayHi = () => alert('Hello');
console.log(sayHi);


/* Multiline arrow functions */
sum = (a, b) => {
    let sum = a + b;
    return sum;
}

alert(sum(1, 2));


/* TAsks */

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

let ask = (question, yes, no) => (confirm(question)) ? yes() : no();

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You don't agreed.")
)
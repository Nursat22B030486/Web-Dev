/* Function Declaration */
// function sayHi(){
//     alert("Hello");
// }

/* Function Expression */

// let sayHi = function(){
//     alert('Hello');
// };

function sayHi(){
    console.log('Hello');
}

console.log(sayHi); // [Function: sayHi]


function sayHi() {   // (1) create
    alert( "Hello" );
  }
  
  let func = sayHi;    // (2) copy
  
  func(); // Hello     // (3) run the copy (it works)!
  sayHi(); // Hello    //     this still works too (why wouldn't it)


/* Callback function */
// The arguments showOk and showCancel of ask are called callback functions or just callbacks.

function ask(question, yes, no){
    if(confirm(question)) yes();
    else no(); 
}

function showOk(){
    alert('You agreed.')
}

function showCanceled(){
    alert('You canceled the execution.');
}
ask("Do you agree?!", showOk, showCanceled);

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );






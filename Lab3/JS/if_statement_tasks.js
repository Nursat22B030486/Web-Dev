// 1
if("0") { // true
    alert("Hello"); 
}

// 2
let answer = prompt("What is the “official” name of JavaScript?", "");

answer == "ECMAScript" ? alert('Right') : alert("You don't know?")

// 3

let num = prompt("Enter number: ", "");

if (num > 0) {
    alert(1)
} else if(num < 0) {
    alert(-1)
} else {
    alert(0)
}

// (num > 0) ? alert(1) :
// (num < 0 ) ? alert(-1):
// alert(0);

// 4

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

let result = ( a+b < 4 ) ? 'Below' : 'Over';

// 5
// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let message = (login == "Employee") ? 'Hello':
                (login == 'Director') ? 'Greetings':
                (login == '') ? 'No login':
                ''; 
            



// 1
alert( null || 2 || undefined ); //2

// 2
alert( alert(1) || 2 || alert(3) ); //alert(1) 2

// 3
alert( 1 && null && 2 ); // null

//4 
alert( alert(1) && alert(2) ); // 1 undefined

//5
alert( null || 2 && 3 || 4 ); // 3

//6
if (age >= 14 && age <=90){}

//7
if (!(age >= 14 && age <=90)){}

//8
if (-1 || 0) alert( 'first' ); //
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );//

//9

let login = prompt("Please enter login: ", "");

if(login == "Admin"){
    let password = prompt("Password:" ,' ');
    (password == "TheMaster") ? alert('Welcome!'):
    (password == '' || password == null) ? alert("Canceled") :
    alert("Wrong answer!");
} else if(login == "" || login == null){
    alert("Canceled");
} else {
    alert("I don't know")
}

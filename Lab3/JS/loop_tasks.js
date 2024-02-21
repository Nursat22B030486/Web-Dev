let i = 3;

while (i) {
    alert(i--);
} //1

//2
i = 0;
while (++i < 5) alert(i); //4

i = 0;
while (i++ < 5) alert(i); //5

//3
for (let i = 0; i < 5; ++i) alert(i);

for (let i = 0; i < 5; i++) alert(i); // both
//4 even 
for (let j = 2; j <= 10; j++) {
    if (j % 2 == 0) alert(j);
}

//5

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }
i = 0;
while (i<3){
    alert(`number${i}!`)
    i++;
}

//6
let ans;
do{
    ans = prompt("Number: ", '')
} while (ans <=100 && ans)

//7
let n = 10;
let count;
lo:
for(let j=2; j<=n; j++){
    for(let i=2; i<j; i++){
        if(j%i == 0){
            continue lo;
        }
    }
    alert(j);
}
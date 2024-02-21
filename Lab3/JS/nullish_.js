/* Nullish coalescing operator '??' */
// In other words, ?? returns the first argument if it’s not null/undefined
// result = (a !== null && a !== undefined) ? a : b;


let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)

user = "John";

alert(user ?? "Anonymous"); // John (user is not null/undefined)

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder



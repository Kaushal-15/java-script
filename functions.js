let username = prompt();
function showMessage() {
    let message = "hello" + username;
    alert(message);
}
showMessage();


let UserName = 'John';//here it is a outer variable//
function showMessage() {
  let UserName = "Bob"; // declared a local variable

  let message = 'Hello, ' + UserName; // here the outer variable is ignored and innner variable is used in the function//
  alert(message);
}
showMessage();
alert( UserName ); 

function CheckAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Do you have permission from your parents?");
  }
}

let age = prompt("How old are you?");
age = Number(age);

if (CheckAge(age)) {
  alert("Access Granted");
} else {
  alert("Access Denied");
}


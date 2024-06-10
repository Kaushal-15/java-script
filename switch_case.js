let job = "Cloud Engineer";
switch (job) {
    case "software developer":
        console.log("He writes the code");
        break;
case "Designer":
  console.log("He makes interactive UI and UX desings");
break;
case "Cloud Engineer":
    console.log("He deploys and updates it to the cloud");
    break;
    default  :
    console.log("he speaks to the customers");
        break;
}
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}

let b = 4;
switch (b) {
  case 4:
    alert("right!");
    break;
case 3:
  case 5:
    alert("wrong!please check the input");
    break;
  default:
    alert("The result is quite scary!");
    break;
}
let word = prompt("Enter a value");
switch (word) {
  case "0":
    case "1":
      alert("The number is zero or one");
    break;
case "2":
  alert("The value is Two");
  break;
  case 3://But for 3, the result of the prompt is a string "3", which is not strictly equal === to the number 3. So we’ve got a dead code in case 3! The default variant will execute.//
    alert("Never excutes");
    break;
  default:
   alert("unkown value");
}
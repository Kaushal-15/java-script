let sum = (a,b) => a+b;
alert (sum(1,2));

let double = n => n * 2;
alert(double(4));

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Access denied') :
  () => alert("Access Granted");

welcome();
//multiline arrow function//
let Sum = (c,d) => {
    let result = c + d;
    return result;
};
alert(Sum(2,3));

let user = {     // an object//
    name: "John",  // by key "name" store value "John"//
    age: 30       // by key "age" store value 30//
  };

  alert( user.name ); 
  alert( user.age ); 

let course =  {
    name: 'javasscript for beginners',
    hours:3
};
console.log(course.name);
course.hours = 4;
console.log(course.hours);


let User = {
  name1: "kaushal",
  age: 30
};
let key = prompt("What do you want to know about the user?", "name1");
alert( User[key] ); 

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true
};

console.log(person);

let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference

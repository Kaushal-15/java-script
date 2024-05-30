//in this operators if the data is variable or anything it changes it to the boolean value//
console.log(true || true);//atleast only value is true it results in true//
console.log(false || true);
onsole.log(true || false);
console.log(false || false);// or operator//
let age =17
let HasCar= true;
const CanDrive = age >=18 || HasCar;
console.log(CanDrive);

//&& and operator//

console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);//here if all the values are true it will be true or false//

let Age =17
let hasCar= true;
const canDrive= age1 >=18 && hasCar;
console.log(canDrive);

//not operator//
console.log(!true)//inverse of the boolean is this operator and in this case inverse of true is false//
let CollegeIsClosedOnSunday = true;
let CollegeIsOpenOnMonday = !true;
console.log(CollegeIsOpenOnMonday);

 //null operator//
 let a = null;
 const result = a ?? true;
 console.log(result);
 

//string conversion//
let value = false;
alert(typeof(value));//here it is boolean//
 value = String|(value);
 alert(typeof(value));//here it is changed to string by the default string  to denote the value//

 //number conversion/
 alert( "10" / "5" );//here it is string,but when divison(/) is used it is changed to number//
 let num = "567";
 alert(typeof(num));//here it is string //
 num = Number(num);
 alert(typeof(num));//here it is number because the dfault number syntax is used//

 //boolean conversion//
 alert(boolean(1));//1 reprsents true boolean value//
 alert(boolean(0));//0 represents false boolean value//
 alert(boolean(""));
 alert(boolean("kaushal"));
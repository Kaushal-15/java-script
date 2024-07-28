function hello(first,name) {
    alert("hello " + first +" "+name);

}
hello("elon","musk");
//default parameter//
function sum(x,y=10){
    console.log(x+y)
}
sum(10);//in default parameter if no value is passed it will reflect if value is passed it will passed//
sum(10,15);
//return//
//return statement doesnt allow anyone code to execute after the reeturn keyword //
function sum(a,b=10) {
    return a*b;
    console.log("hello");//here this hello log message will be not logged due to return keyword//
}
let result = sum(30,20);
console.log("the result is:" + result);

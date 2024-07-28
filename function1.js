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

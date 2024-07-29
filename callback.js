function display(addons) {
 console.log(addons);
}
function add(a,b,callback){
    let num = a + b;
    callback(num);//do not use = to declare the callback = num;//
}
add(20,20,display);//no paranthesis are needed for to callbacka function//

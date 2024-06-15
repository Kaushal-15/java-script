let productColors = ['blue','green','red'];
console.log(productColors);
console.log(productColors[0]); //here key is blue or the input data and key is index value//
console.log(typeof productColors);
console.log(productColors.length);

let Num= ['one',2,'three','four',5,6,'seven'];
console.log(Num[2]);
console.log(Num.length);
console.log(typeof productColors);

let fruits = ["Apple", "Banana", "Cherry", "Date"];

// Find the first element that matches a condition
let found = fruits.find(function(fruit) {
    return fruit.startsWith("B");
});

console.log(found); // "Banana"

let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true
//another case//
let c = {};
let d = {}; // two independent objects

alert( c == d ); // false

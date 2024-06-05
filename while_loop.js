let numbers = [1, 2, 3, 4, 5, 6, 7.8, 8];
let idx = 0;
while (idx < numbers.length) {
    console.log(numbers[idx]);
    idx++;
}

let sum = 0;
while (true) {
    console.log("loop");
    sum++;

    if (sum === 10) {
        break;
    }
}
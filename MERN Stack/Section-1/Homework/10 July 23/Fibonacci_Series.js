// WAP to print Fibonacci series.

let first = 0;
let second = 1;
console.log(first);
console.log(second);

for(let i=0;i<10;i++){
    let third = first + second;
    console.log(third);
    first = second;
    second = third;
}

// Printing in one line
first = 0;
second = 1;
let str = "";
str = str + first + " ";
str = str + second + " ";

for(let i=0;i<10;i++){
    let third = first + second;
    str = str + third + " ";
    first = second;
    second = third;
}

console.log(str);
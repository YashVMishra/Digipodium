// WAP to print sum of all digits of a number.

let num = 123456;
let sum = 0;

while(num > 0){
    let digit = num % 10;
    sum = sum + digit;
    num = parseInt(num / 10);
}

console.log(sum);
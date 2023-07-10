// for(let i=0;i<10;i++){
//     console.log(i);
// }

// console.log("------------");

// for(let i=10;i>0;i-=2){
//     console.log(i);
// }

// WAP to print if a number is prime or not.
num=31;
let prime=true;
for(let i=2;i<num;i++){
    if(num%i===0){
        console.log("not prime");
        prime=false;
        break;
    }
}

if(prime){
    console.log("prime");
}

// WAP to print all the numbers between 100 and 500 that are divisible by 7 and 11.

for(let i=100;i<501;i++){
    if(i%7===0 && i%11===0){
        console.log(i);
    }
}

//WAP to check if a number is a perfect square or not.

let number=36;
let value=Math.sqrt(number); // same as number ** 0.5.

// using isInteger function.
if(Number.isInteger(value)){
    console.log("perfect square");
} else {
    console.log("not perfect square");
}

// parseInt changes the value to a whole number
// deletes the numbers after decimal.
if(value===parseInt(value)){
    console.log("perfect square");
} else {
    console.log("not perfect square");
}

let p=5;
while(p>0){
    console.log(p);
    p--;
}

let q=5;
do {
    console.log(q);
    q--;
} while(q>0);

// reverse a number
let original=345;
let reverse=0;

while(original>0){
    let digit=original%10;
    reverse=(reverse*10)+digit;
    original=parseInt(original/10);
}

console.log(reverse);

// WAP to check if number is palindrome.

let num = 123321;
let reverse = 0;
let temp = num;

while(num>0){
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = parseInt(num / 10);
}

if(reverse === temp){
    console.log("The number is palindrome");
} else {
    console.log("Not a Palindrome Number!");
}
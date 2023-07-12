const nums=[1,2,3,4,5];
const newNums=[];

// WAP to print square of all numbers in array
for(let i=0;i<nums.length;i++){
    console.log(nums[i]*nums[i]);
}

console.log("-----------------------------");

for(let x of nums){
    console.log(x*x);
    newNums.push(x*x);
}

console.log("-----------------------------");

nums.forEach(element => {
    console.log(element*element);
});

console.log(newNums);

// Using map
console.log(nums.map((x) => { return x*x}));

// use map function to add 5% GST to every prices.
const prices=[1329, 38267, 4002, 402, 5793, 352];

console.log(prices.map((x) => {return (x + x * 0.05)}));

// same as above but if we use normal brackets then we do not have to write return keyword
console.log(prices.map((x) => ( (x + x * 0.05))));

// convert the const prices2 to numeric element.
const prices2=["$4563.23", "$4563.23", "$4563.23", "$4563.23"]
console.log(prices2.map((x) => { return parseInt(x.slice(1))}));

// filter function.
console.log(prices.filter((p) => {return p>=500 && p<=5000}));

// if we write HP then that laptop name should come.
const laptop=["Dell Vostro", "Acer Predator", "Apple Macbook", "HP Pavilion", "Lenovo Thinkpad", "Dell Inspiron"]
let search="dell";
console.log(laptop.filter((p) => {return p.toLowerCase().includes(search.toLowerCase())}));



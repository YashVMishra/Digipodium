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


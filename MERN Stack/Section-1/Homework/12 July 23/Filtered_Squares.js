// Create an array of number and filter numbers which are not perfect squares.

const nums=[];
for(let i=1;i<=100;i++){
    nums.push(i);
}

const newNums=nums.filter((p) => {return (p**0.5 === parseInt(p**0.5))});
console.log(newNums);
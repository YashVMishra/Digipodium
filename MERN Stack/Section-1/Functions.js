
// first method
function sum(a,b) {
    var c=a+b;
    console.log(c);
}

sum(3,4);

// shows error.
// console.log(c);

// second method
const getPercentage = function (m1,m2,m3,m4,m5) {
    let sum=m1+m2+m3+m4+m5;
    return (sum*100)/500;
}

console.log(getPercentage(87,76,89,87,67));

// third method - arrow function
// new in ES-6
const fact = (num) => {
    let ans=1;
    for(let i=1;i<=num;i++){
        ans*=i;
    }

    return ans;
}

console.log(fact(7));

// if we apply arithmetic operations on any undefined variable then it becomes NaN.
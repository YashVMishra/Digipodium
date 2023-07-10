age=34;

if(age>=18){
    console.log("Eligible");
    let num="This should be local";
    const pi=3.14;
    // pi+=1;

    var y="function scoped"
} else {
    console.log("Not Eligible")
}

// console.log(num);
console.log(y);
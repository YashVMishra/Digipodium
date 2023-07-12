// Create a function to print all prime numbers in given range parameters.

const helper = (a,b) => {
    let ans=[];

    for(let i=a;i<=b;i++){
        if((isPrime(i))){
            ans.push(i);
        }
    }

    return ans;
}

const isPrime = (a) => {
    for(let i=2;i<a;i++){
        if(a%i==0){
            return false;
        }
    }

    return true;
}

const ans = helper(1,100);
console.log(ans);
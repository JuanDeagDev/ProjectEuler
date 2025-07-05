let ans = 0;
for (let i=1;i<2000000;i++){
    if (isPrime(i) == true) {
        ans = ans + i;
    }
}
function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return(true);
};
console.log(ans - 1);
// result = 142913828922
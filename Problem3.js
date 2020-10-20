let num = 600851475143;
let primes = [];
for (let i=0;i<num;i++) {
    if (num%i === 0) {
        isPrime(i)
    }
}
function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  primes.push(num);
}
console.log(primes.pop());
// result = 6857
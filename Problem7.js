let num = 1;
let count = 0;
while (count <= 10001) {
  if (isPrime(num) == true) {
      count++;
  }
  num++;
}
function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return(true);
}
console.log(num - 1);
// result = 104743
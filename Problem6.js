let sumOfSquare = 0;
let squareOfSum = 0;
for (let i=0;i<101;i++){
    squareOfSum += i;
    sumOfSquare += i*i;
}
console.log((squareOfSum * squareOfSum) - sumOfSquare);
// result = 25164150
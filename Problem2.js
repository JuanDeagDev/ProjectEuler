let tot = 0;
let x = 1;
let y = 1;
let z = 2;
while (x < 4000000) {
    z = x + y;
    x = y;
    y = z;
    if (x%2 === 0) {
        tot += x;
    }
}
console.log(tot);
// result = 4613732
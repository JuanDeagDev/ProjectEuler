let tot = 0;
for (i=0;i<1000;i++) {
    if (i%3 === 0||i%5 === 0) {
        tot += i;
    }
};
console.log(tot);
// result = 233168
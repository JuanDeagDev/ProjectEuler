let num = 0;
for (let i=1;i<Infinity;i++) {
  let arr = [];
  for (let j=1;j<=20;j++) {
    arr.push (i%j);
  }
  if (arr.some(el => el > 0)) {
  } else {
    num = i;
    break;
  }
}
console.log(num);
// result = 232792560
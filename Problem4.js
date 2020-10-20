let nums = [];
for (let i=700;i<999;i++) {
  for (let j=700;j<999;j++) {
    if (isPalindrome(`${i*j}`)) {
        nums.push(i*j);
    }
  }
}
function isPalindrome(str) {
  let strRev = str.split('').reverse().join('');
  if (str === strRev) return true; else return false;
}
console.log(nums.pop());
// result = 906609
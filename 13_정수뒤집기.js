// 자연수 뒤집기
function reverseArr(num) {
  const arr = num
    .toString()
    .split("")
    .reverse()
    .map((x) => parseInt(x));
  console.log(arr);
  // return arr;
}
reverseArr(54321);

// toString()  (num+'')
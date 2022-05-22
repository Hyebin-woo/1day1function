// a~b까지 합 구하기
function sumAll(a, b) {
  output = 0;

  for (let i = a; i <= b; i++) {
    output += i;
  }
  return output;
}
console.log(`1부터 10까지의 합은 ${sumAll(1, 10)}`);
console.log(`5부터 10까지의 합은 ${sumAll(5, 10)}`);

// a~b까지 곱 구하기
function multiAll(a, b) {
  output = 1;

  for (let i = a; i <= b; i++) {
    output *= i;
  }
  return output;
}
console.log(`1부터 10까지의 곱은 ${multiAll(1, 3)}`);

// 소수판별하기
// 소수이면 Yes, 아니면 No로 출력하세요.
//  1과 자기 자신만을 약수로 가지는 수

function check(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return console.log("NO");
    } else {
      return console.log("YES");
    }
  }
  if (num === 1) {
    return console.log("NO");
  }
}
check(11);

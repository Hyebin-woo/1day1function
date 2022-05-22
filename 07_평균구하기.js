// 매개변수로 점수를 입력시 평균 구하기
function average(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(Math.floor(sum / arr.length));
}

average(1, 2, 3);

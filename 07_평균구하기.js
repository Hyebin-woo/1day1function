// 매개변수로 점수를 입력시 평균 구하기
function average1(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(Math.floor(sum / arr.length));
}

average1(1, 2, 3);

function average2() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(Math.floor(sum / arguments.length));
}
average2(1, 2, 3);

function average3(array) {
  //let array=arr.split(",");
  console.log(array.reduce((acc, cur) => acc + cur, 0) / array.length);
}
average3([1, 2, 3]);

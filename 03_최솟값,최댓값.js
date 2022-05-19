// 배열에 있는 최솟값 최댓값 구하기
const testarr = [35, 5, 11, 85, 92];
console.log(`${testarr}중에서 최솟값은 = ${min(testarr)}`);
console.log(`${testarr}중에서 최댓값은 = ${max(testarr)}`);

// 최솟값 구하기
function min(array) {
  let output = array[0];

  //   for (const i of array) {
  //     if (output > i) {
  //       output = i;
  //     }
  //   }

  for (let i = 0; i < array.length; i++) {
    if (output > array[i]) {
      output = array[i];
    }
  }
  return output;
}

// 최댓값 구하기
function max(array) {
  let output = array[0];

  for (const i of array) {
    if (output < i) {
      output = i;
    }
  }
  return output;
}

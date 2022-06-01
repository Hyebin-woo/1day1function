// 100개 중에 8이 총 몇개일까?
function numCount(num) {
  num = num.toString();

  let count = 0;

  for (let i = 1; i <= 100; i++) {
    const arr = i.toString().split("");
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === num) {
        count++;
      }
    }
  }
  console.log(count);
}

numCount(8);

//   (Array(100).fill(1).map((value, index) => value + index) + '').split('8').length-1;

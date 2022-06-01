// 구구단 함수 만들기
// (숫자입력) 단 구구단 만들기
function gogodan(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
//gogodan(9);

// 전체 구구단 만들기
function gogodanAll() {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}
gogodanAll();

// 제코베 백준 37번: 반장 선거
// 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하세요.
// 예_ 혜원(이)가 총 4표로 반장이 되었습니다.

// 입력 : 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력 혜원(이)가 총 4표로 반장이 되었습니다.

function test() {
  const array = "원범 원범 혜원 혜원 혜원 혜원 유진 유진".split(" ");
  let result = {};
  let winner = "";

  for (let index in array) {
    let val = array[index];
    result[val] =
      result[val] === undefined ? 1 : (result[val] = result[val] + 1);
  }

  for (let i = 0; i < Object.keys(result).length; i++) {
    if (result[Object.keys(result)[i]] > result[Object.keys(result)[i + 1]]) {
      winner = Object.keys(result)[i];
    }
  }

  //   winner = Object.keys(result).reduce(function (a, b) {
  //     return result[a] > result[b] ? a : b;
  //   });

  console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
}

test();

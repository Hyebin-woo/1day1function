// 평균점수 계산기 만들기
// 함수([10, 20, 30, 40, 50], 40) 이렇게 쓰면 콘솔창에 "평균보다 10점이 올랐네요"가 떠야합니다. (평균이 30이니까)

// 함수([40, 40, 40], 20) 이렇게 쓰면 콘솔창에 "평균보다 20점이 떨어졌네요 재수추천"이 떠야합니다. (평균이 40이니까)

function solution(arr, cut) {
  let average = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;

  if (average > cut) {
    console.log(`평균보다 ${average - cut}점이 떨어졌네요.. 재수추천`);
  } else if (average < cut) {
    console.log(`평균보다 ${cut - average}점이 올랐네요 수고하셨어요!`);
  }
}
solution([10, 20, 30, 40, 50], 40);
solution([40, 40, 40], 20);

// 제코베 42번 요일확인 함수
// 두 수 a, b를 입력받아 2022년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
// 예를 들어 a = 5, b = 24라면 5월 30일은 월요일이므로 문자열 "SUN"를 반환하세요.

// getDay() : 일~토 (0~6)로 표현하기 때문에 "SUN"부터 배열에 넣기
// getMonth()도 0부터 시작
const day = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

function solution(a, b) {
  const daycheck = new Date(`2022-${a}-${b}`);
  console.log(`${a}월 ${b}일은 ${day[daycheck.getDay()]}`);
}
solution(5, 30);

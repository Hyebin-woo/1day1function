// 윤년 구하기
function isleapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(`2020년은 윤년일까요~? ${isleapYear(2020)}`);

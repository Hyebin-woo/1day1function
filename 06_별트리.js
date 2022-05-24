// 우리가 고려해야할 점
// 트리의 전체 줄
// 트리의 공백
// 트리의 별

function starTree1(num) {
  let star = "";

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num - i; j++) {
      star += " ";
    }
    for (let z = 1; z <= 2 * i - 1; z++) {
      star += "*";
    }
    star += "\n";
  }
  console.log(star);
}
starTree1(9);

function starTree2(num) {
  // repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.
  for (let i = 1; i < num; i++) {
    console.log(" ".repeat(num - i) + "*".repeat(2 * i - 1));
  }
}
starTree2(9);

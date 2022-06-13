// 입력 : querty
// 출력 : euerty

// 입력 : hqllo my namq is hyqwon
// 출력 : hello my name is hyewon

const word = prompt("문장을 입력하세요!!!!");

function replaceWord(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}
console.log(replaceWord(word, "q", "e"));

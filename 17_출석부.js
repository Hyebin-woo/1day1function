let 출석부 = ["흥민", "영희", "철수", "재석", "영희"];

function 있니1(name) {
  for (let i = 0; i < 출석부.length; i++) {
    if (name === 출석부[i]) {
      return console.log(`여기 ${name} 있어요!!`);
    }
  }
  console.log(`${name} 없어요!!`);
}
//있니1("혜빈");
//있니1("철수");

function 있니2(name) {
  return 출석부.includes(name) ? console.log("있어요") : console.log("없어요");
}

// 있니2("혜빈");
// 있니2("영희");

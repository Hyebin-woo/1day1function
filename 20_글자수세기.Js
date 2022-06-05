function 글자세기(txt) {
  let 결과 = {};
  [...txt].forEach(function (a) {
    if (결과[a] > 0) {
      결과[a]++;
    } else {
      결과[a] = 1;
    }
  });
  console.log(결과);
}

글자세기("abcabcabc");
글자세기("가나가다가가가");

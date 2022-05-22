//숫자중 3, 6, 9가 나오면 박수치기
function game(num) {
  let numbers = num.toString().split("");

  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] == "3" || numbers[i] == "6" || numbers[i] == "9") {
      console.log("박수!");
    }
  }
}
game(33);

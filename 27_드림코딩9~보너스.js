class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

//09. compute student's average score
const average = students.reduce((a, b) => a + b.score, 0) / students.length;
console.log(Math.floor(average));

//10. make a string containin all the scores
// result should be: '45, 80, 90, 66, 88'
const scoreString = students.map((student) => student.score).join();
console.log(scoreString);

//보너스. 위 문제에서 string을 만들긴 만드는데 점수가 50점 이상인 애들로만 만들어보세요.
const scoreString2 = students
  .map((student) => student.score)
  .filter((a) => a >= 50)
  .join();
console.log(scoreString2);

// 보너스. Q.10 sorted in asending order and make it a string
// result should be: '45, 66, 80, 88, 90'
const scoreSort = students
  .map((student) => student.score)
  .sort((a, b) => a - b)
  .join();
console.log(scoreSort);

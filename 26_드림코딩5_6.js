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
// 05. find a student with the score 90
const result1 = students.find((student) => student.score === 90);
//console.log(result1);

// 06. make an array of enrolled studends
const result2 = students.filter((student) => student.enrolled === true);
//console.log(result2);

// 07. make an array containing only the students' scores result sould be : [45, 80, 90, 66, 88]
const result3 = students.map((student) => student.score);
//console.log(result3);

// 08. check if there is a student with the score lower than 50
const result4 = students.some((student) => student.score < 50);
console.log(result4);
const result = students.some((student) => student.score < 50);
console.log(result);

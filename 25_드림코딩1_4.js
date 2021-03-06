// 1. make a string out of an array
const fruits = ["apple", "banana", "orange"];
const string = fruits.join();
console.log(string);

//2. make an array out of a string
const fruitsString = "π,π,π,π";
const array = fruitsString.split(",");
console.log(array);

//3. make this array look like this: [5,4,3,2,1]
const arr = [1, 2, 3, 4, 5];
const result = arr.reverse();
console.log(result);
// console.log(arr); // μλ³Έλ°°μ΄μ΄ λ°λλ€.

//4. make new array without the first two elements
const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.splice(2, 3);
console.log(result2);
//console.log(arr2); // μλ³Έλ°°μ΄μ΄ λ°κ·

const arr3 = [1, 2, 3, 4, 5];
const result3 = arr3.slice(2, 5);
console.log(result3);
//console.log(arr3); //μλ³Έλ°°μ΄μ λ°κΎΈμ§ μλλ€.

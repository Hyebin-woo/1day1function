const str="로꾸거"

// for문 사용
let result="";
for(let i=0; i<str.length; i++){
result=str[i]+result;
}

// 메소드 사용 
console.log(str.split("").reverse().join(""));
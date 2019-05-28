"use strict"

// 2x^2 + 4x - 3=0
// ax^2 + bx + c = 0
function getResult(a, b, c){
  // b2 - 4ac
  let d = b**2 + 4 * a * c;
  if (d > 0) {
    let x1 = (Math.sqrt(d) - b) / (2 * a);
    let x2 = (Math.sqrt(d) + b) / (-2 * a);
    console.log('x1 = '+x1+'   x2 = '+x2);
  } else if (d == 0) {
    x1 = b/(-2*a);
    console.log('x = '+x1);
  } else {
    console.log('Решений нет, так как дискриминант меньше нуля.');
  }
}
let a = 3;
let b = 0;
let c = 48;
getResult(a, b, c);



function getAverageMark(marks){
  const res = [];
    for (let i = 5; i < marks.length ; i++) {
      console.log(marks)
  }
   if (marks.length > 5) {
    console.log('количество оценок больше 5')
  }
  else {
    marks = [1,2,3,4,5,6,7,8,9];
	 console.log(marks.array_splice(5));
  }
   
  return res;  
}

console.log(getAverageMark([1,2,3,4,5,6,7,8,9]))

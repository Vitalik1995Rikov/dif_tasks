let arr = [5, 1, 1, 1, 0, 1];
let num = 0;
let maxNum = 0;


for (let item of arr) {
  if (item == 1) {
    num++;
  } else {
      num = 0;
    }
    if (num > maxNum) {
      maxNum = num;
    }
  }

  console.log(maxNum);

  
  
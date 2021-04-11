let arr = [5, 1, 1, 1, 0, 1];
let num = 0;
let maxNum = 0;


for (let item in arr) {
  if (arr[item] == 1) {
    num++;
    maxNum = num;
    console.log(num);
    }
    else {
      console.log('не единичка');
      num = 0;
    }
  }

  console.log(maxNum);

  
  
let arr = [5, 2, 4, 8, 8, 8];
let arrNew = [];

for (let item in arr) {
  if (arr[item] >= arr[item - 1]) {
    arrNew.push(arr[item - 1]);
    console.log(arrNew);
  }
}

function unique(a) {
  return Array.from(new Set(a));
}

let newArr = unique(arrNew);
console.log(newArr);

newArr.forEach(item => console.log(item));


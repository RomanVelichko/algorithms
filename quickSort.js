function quickSort(arr) {
  if (arr.length < 2) return arr;

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const less = [];
  const greater = [];

  for (let i=0; i < arr.length; i++) {
    if (i === pivotIndex) continue;

    if(arr[i] <= pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}


const arr3 = [5,1,4,5,2,3,1,12,7,4,43,8,9,11];
const result3 = quickSort(arr3);

console.log('ARRAY FOR Quick-SORT: ', arr3);
console.log("quickSORT RESULT: ", result3)

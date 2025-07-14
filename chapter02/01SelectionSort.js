function minorSearch(arr) {
  let smaller = arr[0];
  let lowest_index = 0;

  arr.forEach((a, i) => {
    if (a < smaller) {
      smaller = a;
      lowest_index = i;
    }
  });

  return lowest_index;
}

function selectionSort(arr) {
  let newArr = [];
  
  while (arr.length > 0) {
    let smallerIndex = minorSearch(arr);
    let [minValue] = arr.splice(smallerIndex, 1); // remove o menor elemento
    newArr.push(minValue);
  }

  return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
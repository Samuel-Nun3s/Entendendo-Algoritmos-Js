function sum(list) {
  let total = 0;
  list.forEach((l) => {
    total += l;
  })

  return total;
}

// console.log(sum([1, 2, 3, 4]));


function counter(list) {
  if (list.length === 0) {
    return 0;
  } else {
    list.pop();
    return 1 + counter(list);
  }
}

// console.log(counter([1,2,3,4]));

function findHigherValue(list) {
  if (list.length === 1) {
    return list[0];
  }
  
  let last = list.pop();

  let maxRest = findHigherValue(list);

  return last > maxRest ? last : maxRest;
}

// console.log(findHigherValue([1, 25, 9, 12]))

function quicksort(array) {
  if (array.length < 2) {
    return array;
  } else {
    let pivot = array[0];
    let minors = array.slice(1).filter(i => i <= pivot);
    let bigger = array.slice(1).filter(i => i > pivot);
    return quicksort(minors) + [pivot] + quicksort(bigger);
  }
}

console.log(quicksort([10, 5, 2, 3]));

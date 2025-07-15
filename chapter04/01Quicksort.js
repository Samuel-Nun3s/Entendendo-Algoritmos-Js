function sum(list) {
  let total = 0;
  list.forEach((l) => {
    total += l;
  })

  return total;
}

console.log(sum([1, 2, 3, 4]));


function counter(list) {
  if (list.length === 0) {
    return 0;
  } else {
    list.pop();
    return 1 + counter(list);
  }
}

console.log(counter([1,2,3,4]));

function findHigherValue(list) {
  if (list.length === 1) {
    return list[0];
  }
  
  let last = list.pop();

  let maxRest = findHigherValue(list);

  console.log(`${last} > ${maxRest} ? ${last} : ${maxRest}`);
  let teste = last > maxRest ? last : maxRest;
  console.log(teste);
  return last > maxRest ? last : maxRest;
}

console.log(findHigherValue([1,4,9,12]))

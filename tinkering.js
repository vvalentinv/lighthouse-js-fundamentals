const sumLargestNumbers = function (data) {
  // Put your solution here
  let dataCopy = data;
  //for (let j = 0; j < dataCopy.length; j++) console.log(dataCopy[j]);
  let total = null;
  i = 0;
  while (i < 2) {
    let max = 0;
    for (let j = 0; j < dataCopy.length; j++) {
      if (max <= dataCopy[j]) {
        max = dataCopy[j];
      }
    }

    total += max;
    if (i === 0) {
      for (let j = 0; j < dataCopy.length; j++) {
        if (max === dataCopy[j]) {
          dataCopy.splice(j, 1);
        }
      }
    }
    i++;
  }
  return total;
};
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 3, 2]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

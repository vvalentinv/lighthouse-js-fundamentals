const numberOfVowels = function (data) {
  // Put your solution here
  let total = 0;
  let dataArray = [];
  for (let i = 0; i < data.length; i++) dataArray[i] = data[i];
  for (let i = 0; i < dataArray.length; i++) {
    switch (dataArray[i]) {
      case "a":
        total++;
        break;
      case "e":
        total++;
        break;
      case "i":
        total++;
        break;
      case "o":
        total++;
        break;
      case "u":
        total++;
        break;
      default:
        break;
    }
  }
  return total;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

const urlEncode = function (text) {
  // Put your solution here
  // var textArr = {};
  // for (let i = 0; i < text.length; i++) textArr[i] = text[i];
  // let i = 0;
  let encodedText = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      encodedText += "%";
      encodedText += "2";
      encodedText += "0";
    } else {
      encodedText += text[i];
    }
  }
  return encodedText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

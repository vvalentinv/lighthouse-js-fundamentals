const instructorWithLongestName = function (instructors) {
  // Put your solution here
  let max = instructors[0].name.length;
  let obj = {};
  instructors.forEach((element) => {
    element.name.length >= max ? (max = element.name.length) : (max = max);
  });
  instructors.forEach((element) => {
    if (element.name.length === max) obj = element;
  });
  return obj;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);

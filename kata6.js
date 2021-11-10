const whereCanIPark = function (spots, vehicle) {
  // Code here!
  let parkingSpot = [];
  let parkingType = [];
  if (vehicle === "regular") {
    parkingType.push("R");
  } else if (vehicle === "small") {
    parkingType.push("R");
    parkingType.push("S");
  } else if ((vehicle = "motorcycle")) {
    parkingType.push("R");
    parkingType.push("S");
    parkingType.push("M");
  }
  for (let i = 0; i < spots.length; i++) {
    for (let j = 0; j < spots[i].length; j++) {
      if (
        spots[i][j] === parkingType[0] ||
        spots[i][j] === parkingType[1] ||
        spots[i][j] === parkingType[2]
      ) {
        parkingSpot[0] = i;
        parkingSpot[1] = j;
        return parkingSpot;
      }
    }
  }
  return false;
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],
    "regular"
  )
);

console.log(
  whereCanIPark(
    [
      ["M", "M", "M", "M"],
      ["M", "s", "M", "M"],
      ["M", "M", "M", "M"],
      ["M", "M", "r", "M"],
    ],
    "small"
  )
);

console.log(
  whereCanIPark(
    [
      ["s", "s", "s", "s", "s", "s", "d"],
      ["s", "m", "s", "S", "r", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["S", "r", "s", "m", "r", "s"],
      ["S", "r", "s", "m", "R", "s"],
      ["S", "r", "S", "M", "m", "S"],
    ],
    "motorcycle"
  )
);

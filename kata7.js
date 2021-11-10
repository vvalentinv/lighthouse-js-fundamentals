const checkAir = function (samples, threshold) {
  // Code here!
  let dirtySamplesCount = 0;
  samples.forEach((element) =>
    element === "dirty"
      ? dirtySamplesCount++
      : (dirtySamplesCount = dirtySamplesCount)
  );
  return samples.length * threshold <= dirtySamplesCount ? "Polluted" : "Clean";
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);

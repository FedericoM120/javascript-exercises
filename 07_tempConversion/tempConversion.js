const ftoc = function(farenheit) {
  let celsiusUnrounded = (farenheit - 32) * (5 / 9);
  let celsius = Math.round(celsiusUnrounded * 10) / 10;
  return celsius;
};

const ctof = function(celsius) {
  let farenheitUnrounded = (celsius * (9 / 5)) + 32;
  let farenheit = Math.round(farenheitUnrounded * 10) / 10;
  return farenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

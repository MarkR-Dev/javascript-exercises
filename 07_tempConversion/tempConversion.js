const convertToCelsius = function(temp) {
  
  let degInCel = (temp - 32) * (5 / 9);
  degInCel = Number(degInCel.toFixed(1));
  return degInCel;

};

const convertToFahrenheit = function(temp) {

  let degInFah = temp * (9 / 5) + 32;
  degInFah = Number(degInFah.toFixed(1));
  return degInFah;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

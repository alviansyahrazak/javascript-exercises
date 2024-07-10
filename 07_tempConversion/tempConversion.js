const convertToCelsius = function(fahrenheit) {
  let toCelcius = ((fahrenheit - 32) / 1.8).toFixed(1)
  return parseFloat(toCelcius)
}; 

const convertToFahrenheit = function(celcius) {
  let toFahrenheit = (celcius * 1.8 + 32).toFixed(1)
  return parseFloat(toFahrenheit)
}
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

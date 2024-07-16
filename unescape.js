const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
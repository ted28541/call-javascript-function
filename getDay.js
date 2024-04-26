const merge = [...new Set([...a, ...b])];
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
console.log("0 || 1 = "+(0 || 1));
const value = ( 5 < 7 ) ? "True" : "False" ;
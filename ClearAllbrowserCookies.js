const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
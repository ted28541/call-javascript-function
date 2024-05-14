const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
console.log("0 || 1 = "+(0 || 1));
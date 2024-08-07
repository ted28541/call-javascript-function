const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
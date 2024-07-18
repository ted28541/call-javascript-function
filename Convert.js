const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const merge = [...new Set([...a, ...b])];
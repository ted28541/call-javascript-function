const timeFromDate = date => date.toTimeString().slice(0, 8);
const removeDuplicates = (arr) => [...new Set(arr)];
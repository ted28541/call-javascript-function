const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
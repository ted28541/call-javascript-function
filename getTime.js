const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
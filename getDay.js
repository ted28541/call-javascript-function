const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
var DELIM_SIZE = 4;
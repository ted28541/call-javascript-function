const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const scriptRootPath = path.join(repositoryRootPath, 'script');
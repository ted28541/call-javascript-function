const executableName = getExecutableName(channel, appName);
const apmRootPath = path.join(repositoryRootPath, 'apm');
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const resultingPromises = urls.map((url) => makHttpRequest(url));
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const currentDate = () => new Date().toLocaleDateString('en-US');
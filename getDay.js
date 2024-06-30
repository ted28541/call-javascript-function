const currentDate = () => new Date().toLocaleDateString('en-US');
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
function myAPITS(someString: string, someNum: number) { ... };
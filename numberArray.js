const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
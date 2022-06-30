let str = 'the Quick Brown Fox jumps over the lazy dog'

let str2 = str.charAt(0).toUpperCase() + str.slice(1, str.length).toLowerCase();

console.log(str2);
const arr = [1,2,3];

arr.unshift(0);

console.log('after unshift:', arr);

arr.unshift(7, 8);

console.log('after unshift 2:', arr);

console.log('shift:', arr.shift());
console.log('shift:', arr.shift());
console.log('shift:', arr.shift());
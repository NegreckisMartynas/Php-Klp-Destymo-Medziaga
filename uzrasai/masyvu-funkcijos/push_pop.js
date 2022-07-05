let arr = [1,2,3];
let arr2 = [7, 8, 9];

[1,2,3].push(arr2); // === arr.push([7, 8, 9]);
arr.push(...arr2); // === arr.push(7, 8, 9)

console.log('after push: ', arr);

arr.pop()
console.log('after pop: ', arr);

console.log('peek last value: ', arr[arr.length-1]);
console.log('pop result: ', arr.pop())

while(arr.length > 0) {
    console.log('pop: ', arr.pop());
}

console.log('After loop:', arr)
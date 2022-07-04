const array = [100, 200, 300, 400, 500];

for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
console.log('=============')

for(let i = array.length-1; i >= 0; i--) {
    console.log(array[i]);
}
console.log('=============')
for(let i = array.length; i >= 0; i--) {
    // array.length === 5
    // array[5] === undefined
    console.log(array[i]);
}
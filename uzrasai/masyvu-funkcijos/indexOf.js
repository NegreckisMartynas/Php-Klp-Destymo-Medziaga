const arr = ['a','q','e','r','t','g','a','r','u','a'];

const indexOfQ = arr.indexOf('q');
console.log('index of 5:', indexOfQ);
console.log('pries q', arr[indexOfQ-1]);
console.log('po q', arr[indexOfQ+1]);

const indexOfR = arr.indexOf('r');
const indexOfR2 = arr.lastIndexOf('r');

console.log(indexOfR, indexOfR2);

console.log('index of second a', arr.indexOf('a', arr.indexOf('a'+1)+1));
console.log(arr.lastIndexOf('a', 6));

function findSymbolSkipping(arr, symbol, skipping) {
    let start = -1;
    for(let i = 0; i <= skipping; i++) {
        start = arr.indexOf(symbol, start+1);
    }
    return start;
}

console.log('index of third a', findSymbolSkipping(arr, 'a', 2))
console.log(arr[findSymbolSkipping(arr, 'r', 1)]);
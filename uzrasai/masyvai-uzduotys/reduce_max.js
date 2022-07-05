function max(arr) {
    let result = arr[0];
    for(let i = 0; i < arr.length; i++) {
        const next = arr[i];
        if(next > result) {
            result = next;
        }
    }
    return result;
}
//arr.push(1) - ideti 1 i masyvo pabaiga

console.log(max([1, 5, 19, 31, 5, 7, 10, 100]))
console.log(max([-10, -20, -5]))
function sum(arr) {
    let result = 0;
    for(let i = 0; i < arr.length; i++) {
        result = arr[i] + result;
    }
    return result;
}
//arr.push(1) - ideti 1 i masyvo pabaiga

console.log(sum([1, 5, 19, 31, 5, 7, 10]))
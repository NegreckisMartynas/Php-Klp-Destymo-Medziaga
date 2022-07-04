function filterLargerThan10(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 10) {
            result.push(arr[i]);
        }
    }
    return result;
}
//arr.push(1) - ideti 1 i masyvo pabaiga

console.log(filterLargerThan10([1, 5, 19, 31, 5, 7, 10]))
function reverse(arr) {
    let result = [];
    while(arr.length > 0) {
        result.unshift(arr.shift());
    }
    return result;
}

console.log(reverse([1,2,3,4,5,6,7,8,9]));
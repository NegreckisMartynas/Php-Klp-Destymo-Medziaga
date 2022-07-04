function min(arr) {
    let result = arr[0];
    for(let i = 0; i < arr.length; i++) {
        const next = arr[i];
        if(next < result) {
            result = next;
        }
    }
    return result;
}

console.log(min([16, 19, 31, 6, 7, 10, 100]))
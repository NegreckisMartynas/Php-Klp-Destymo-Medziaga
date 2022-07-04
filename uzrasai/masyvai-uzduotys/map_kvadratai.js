function kvadratai(arr) {
    let result = [];
    for(let i=0; i < arr.length; i++){
        const element = arr[i];
        result.push(element ** 2)
    }
    return result
}


console.log(kvadratai([1,2,3,4,5,6,7,8,9]))
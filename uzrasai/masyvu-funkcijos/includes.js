const arr = [153, 143, 156, 481];

console.log('arr contains 143:', arr.includes(143));
console.log('arr contains 157:', arr.includes(157));


function isVowel(symbol) {
    if(['a', 'e', 'i', 'o', 'u'].includes(symbol)){
        return true
    }
    else{
        return false
    }
}

function countVowels(str) {
    let count = 0;
    for(const s of str){
        if(isVowel(s)){
            count += 1;
        }
    }
    return count;
}

console.log(countVowels('Hello World'));

const arr1 = [1, 2, 3]
const arr2 = [3, 2, 1]

// function arrayContainsAll(a, b) {

// }
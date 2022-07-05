//Sukurkite funkciją digits(num), kuri grąžina duoto skaičiaus skaitmenis masyve: 12345 => [1,2,3,4,5] 

function digits(num) {
    throw new Error('Function not implemented');
}


// Testavimai apačioje

const test = makeTestFunction((input, output) => input + ' skaitmenys: ' + output, digits);

test([12345], [1,2,3,4,5])
test([1000672], [1,0,0,0,6,7,2])
test([98346531271], [9,8,3,4,6,5,3,1,2,7,1])

// pagalbinės funkcijos

function makeTestFunction(successMessage, test) {
    return (input,  expected) => {
        const res = test(...input)
        if(! compare(res, expected)){
            console.error(`>>> ${test.name}(${formatVal(input)}) failed. Expected: ${formatVal([expected])}; received: ${formatVal([res])}`);
        }
        else {
            console.log(successMessage(formatVal(input), formatVal([res])))
        }
    }
}

function formatVal(input) {
    return input.map(e => JSON.stringify(e))
}

function compare(a, b) {
    if(a === b) return true;
    else if(typeof(a) !== typeof(b)) return false;
    else if(Array.isArray(a) && Array.isArray(b)) return compareArrays(a, b);
    return false;
}

function compareArrays(a, b) {
    if(a.length !== b.length) return false
    let i = 0;
    while(i < a.length) {
        if(a[i] !== b[i]) return false
        i++;
    }
    return true
}
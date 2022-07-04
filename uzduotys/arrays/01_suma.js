// parašykite funkciją suma(arr), kuri suskaičiuoja masyvo elementų sumą

function suma(arr) {
    throw new Error('Function not implemented')
}

// Testavimai apačioje


const testSum = makeTestFunction((input, output) => input + ' suma: ' + output, suma);

testSum([[1, 2]], 3)
testSum([[10, 20, 33]], 63)
testSum([[2561, 9167, 2167]], 13895)

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
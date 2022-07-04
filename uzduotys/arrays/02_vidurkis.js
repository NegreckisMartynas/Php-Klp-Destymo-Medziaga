// parašykite funkciją vidurkis(arr), kuri suskaičiuoja masyvo elementų vidurkį

function vidurkis(arr) {
    throw new Error('Function not implemented')
}

// Testavimai apačioje


const testVidurkis = makeTestFunction((input, output) => input + ' vidurkis: ' + output, vidurkis);

testVidurkis([[1, 2]], 1.5)
testVidurkis([[10, 20, 33]], 21)
testVidurkis([[6821, 5714, 3122, 13422, 21513, 51346, 1641]], 14797)

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
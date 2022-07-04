// parašykite funkciją lyginiai(arr), kuri paimtų tik lyginius elementus is masyvo ir grąžintų naują masyvą su jais.

function lyginiai(arr) {
    throw new Error('Function not implemented');
}

// Testavimai apačioje


const testLyginiai = makeTestFunction((input, output) => input + ' lyginiai: ' + output, lyginiai);

testLyginiai([[1, 2, 3, 4, 5]], [2,4])
testLyginiai([[81, 56, 26, 22, 81, 90]], [56, 26, 22, 90])
testLyginiai([[6821, 5714, 3122, 13422, 21513, 51346, 1641]], [5714, 3122, 13422, 51346])

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
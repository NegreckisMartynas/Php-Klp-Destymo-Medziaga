// parašykite funkciją didesnis150proc(arr), kurigrąžintų naują masyvą, kurios elementai - duoto masyvo skaičiai, padauginti iš 150 procentų.

function proc150(arr) {
    throw new Error('Function not implemented');
}

// Testavimai apačioje


const testProc = makeTestFunction((input, output) => input + ' * 150% = ' + output, proc150);

testProc([[1, 2, 3]], [1.5,3, 4.5])
testProc([[81, 56, 26, 22, 81, 90]], [121.5, 84,39, 33,121.5, 135])
testProc([[6821, 5714, 3122, 13422, 21513, 51346, 1641]], [10231.5,8571,4683,20133,32269.5,77019,2461.5])

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